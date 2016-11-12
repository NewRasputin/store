import mongoose from 'mongoose'
import logger from '../logger.js'

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/store', err => {
	if (err) {
		logger.error(err)
	} else {
		logger.info('Connected to database!')
	}
})

export default mongoose
