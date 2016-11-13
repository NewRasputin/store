import express from 'express'
import helmet from 'helmet'
import sessions from 'client-sessions'
import bodyParser from 'body-parser'
import logger from './logger.js'
import auth from './routes/auth.js'
import api from './routes/api.js'
import _db from './db/config.js'

const app = express()

const port = process.env.PORT || 5000

logger.info('Booting up...')

app.use(helmet())
app.use(sessions({
	cookieName: 'session',
	secret: process.env.SESS_SECRET
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(logger.middleware)
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './dist/views')

app.use('/auth', auth)
app.use('/api', api)

app.get('/', (req, res) => {
	res.render('index')
})

app.listen(port, () => {
	logger.info('Server listening on port %s!', port)
})
