import logger from '../logger.js'
import User from '../models/user.js'

const authenticate = (req, res, next) => {
	if (req.session && req.session.usrname) {
		let username = req.session.usrname
		logger.info('Authenticating user \'' + username + '\' ...')
		User.findOne({usrname: username}, (err, user) => {
			if (err) {
				logger.error(err)
				res.status(500)
			} else if (user) {
				logger.info('Authenticated!')
				next()
			} else {
				logger.error('User \'' + username + '\' not found')
				res.status(400).send({message: 'You\'re not allowed to do that'})
			}
		})
	} else {
		logger.error('User not logged in')
		res.status(400).send({message: 'You must be logged in to do that'})
	}
}

export default authenticate
