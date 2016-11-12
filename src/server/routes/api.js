import express from 'express'
import logger from '../logger.js'
import Item from '../models/item.js'

const api = express.Router()

api.get('/items', (req, res) => {
	Item.find({}, (err, items) => {
		res.send(items)
	})
})

api.post('/items', (req, res) => {
	let item = new Item({
		name: req.body.name,
		desc: req.body.desc,
		price: req.body.price
	})
	item.save(err => {
		if (err) {
			logger.error(err)
		} else {
			logger.info('Saved!')
			res.sendStatus(200)
		}
	})
})

export default api
