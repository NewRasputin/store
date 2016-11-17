import express from 'express'
import logger from '../logger.js'
import User from '../models/user.js'
import bcrypt from 'bcryptjs'

const auth = express.Router()

auth.get('/login', (req, res) => {
	let username = req.session.usrname
	logger.info('Finding user...')
	User.findOne({usrname: username}, (err, user) => {
		if (err) {
			logger.error(err)
			res.sendStatus(500)
		} else if (user) {
			logger.info('User \'' + username + '\' logged in')
			res.status(200).send({username: username})
		}
	})
})

auth.post('/login', (req, res) => {
	let username = req.body.usrname
	let password = req.body.psswrd
	logger.info('Finding user...')
	User.findOne({usrname: username}, (err, user) => {
		if (err) {
			logger.error(err)
			res.sendStatus(500)
		} else if (user) {
			logger.info('User found!')
			logger.info('Checking password...')
			bcrypt.compare(password, user.psswrd, (err, correct) => {
				if (err) {
					logger.error(err)
					res.sendStatus(500)
				} else {
					if (correct) {
						logger.info('Password correct!')
						username = user.usrname
						req.session.usrname = username
						logger.info('User \'' + username + '\' logged in')
						res.status(200).send({username: username})
					} else {
						logger.error('Password incorrect')
						res.status(400).send({message: 'Password incorrect'})
					}
				}
			})
		} else {
			logger.error('User \'' + username + '\' not found')
			res.status(400).send({message: 'User \'' + username + '\' not found'})
		}
	})
})

auth.post('/signup', (req, res) => {
	let user = new User({
		usrname: req.body.usrname,
		email: req.body.email,
		psswrd: req.body.psswrd,
	})
	logger.inf('Saving user...')
	user.save(err => {
		if (err) {
			logger.error(err)
			res.sendStatus(500)
		} else {
			logger.info('User saved!')
			res.status(200).send({message: 'User saved! Please log in with new username and password'})
		}
	})
})

auth.get('/logout', (req, res) => {
	logger.info('Logging out...')
	if (req.session && req.session.usrname) {
		let username = req.session.usrname
		req.session.reset()
		logger.info('User \'' + username + '\' logged out')
		res.status(200).send('User \'' + username + '\' logged out')
	} else {
		logger.error('No session found')
		res.status(400).send({message: 'No session found'})
	}
})

export default auth
