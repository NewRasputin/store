import debug from 'debug'

const logger = {}
logger.info = debug('app:info')
logger.warn = debug('app:warn')
logger.error = debug('app:error')

export default logger
