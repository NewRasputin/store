import express from 'express'

import logger from './logger.js'

import db from './db/config.js'

const app = express()

const port = process.env.PORT || 5000

logger.info('Booting up...')

app.use(logger.middleware)

app.get('/', (req, res) => {
	res.send('Hello world!')
})

app.listen(port, () => {
	logger.info('Server listening on port %s...', port)
})
