import express from 'express'
import logger from '../logger.js'
import User from '../models/user.js'
import bcrypt from 'bcryptjs'

const auth = express.Router()

auth.post('/login', (req, res) => {
	let username = req.body.usrname
	let password = req.body.psswrd
	User.findOne({usrname: username}, (err, user) => {
		if (err) {
			logger.error(err)
		} else if (user) {
			logger.info('User found!')
			logger.info('Checking password...')
			bcrypt.compare(password, user.psswrd, (err, correct) => {
				if (err) {
					logger.error(err)
				} else {
					if (correct) {
						logger.info('Password correct!')
						res.sendStatus(200)
					} else {
						logger.error('Password incorrect!')
						res.sendStatus(400)
					}
				}
			})
		} else {
			logger.error('No user found!')
			res.sendStatus(400)
		}
	})
})

auth.post('/signup', (req, res) => {
	let user = new User({
		usrname: req.body.usrname,
		email: req.body.email,
		psswrd: req.body.psswrd,
	})
	user.save(err => {
		if (err) {
			logger.error(err)
		} else {
			logger.info('Saved!')
			res.sendStatus(200)
		}
	})
})

export default auth
