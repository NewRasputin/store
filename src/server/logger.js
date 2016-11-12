import debug from 'debug'

const logger = {
	info: debug('app:info'),
	warn: debug('app:warn'),
	error: debug('app:error')
}

export default logger
