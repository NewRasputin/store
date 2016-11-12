import express from 'express'

import bodyParser from 'body-parser'

import logger from './logger.js'

import _db from './db/config.js'

import api from './routes/api.js'

const app = express()

const port = process.env.PORT || 5000

logger.info('Booting up...')

app.use(logger.middleware)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api', api)

app.get('/', (req, res) => {
	res.send('Hello world!')
})

app.listen(port, () => {
	logger.info('Server listening on port %s!', port)
})
