import debug from 'debug'

const logger = {}
logger.info = debug('app:info')
logger.warn = debug('app:warn')
logger.error = debug('app:error')
logger.httpinf = debug('http:info')
logger.httperr = debug('http:error')
logger.middleware = (req, res, next) => {
	logger.httpinf('%s %s', req.method, req.url)
	next()
}

export default logger
