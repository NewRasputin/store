import mongoose from 'mongoose'
import logger from '../logger.js'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
	usrname: { type: String, unique: true, required : true },
	email: { type: String, required : true },
	psswrd: { type: String, required : true },
	admin: { type: Boolean, default: false }
},{
	timestamps: true
})

userSchema.pre('save', function(next) {
	const self = this
	logger.info('Hashing password...')
	bcrypt.hash(self.psswrd, 10, (err, hash) => {
		if (err) {
			logger.error(err)
		} else {
			self.psswrd = hash
			next()
		}
	})
})

const User = mongoose.model('User', userSchema)

export default User
