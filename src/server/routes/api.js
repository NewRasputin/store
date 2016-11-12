import express from 'express'
import logger from '../logger.js'
import Item from '../models/item.js'

const api = express.Router()

api.get('/items', (req, res) => {
	logger.info('Finding items...')
	Item.find({}, (err, items) => {
		if (err) {
			logger.error(err)
			res.sendStatus(500)
		} else {
			logger.info('Items found!')
			res.status(200).send(items)
		}
	})
})

api.post('/items', (req, res) => {
	logger.info('Saving item...')
	let item = new Item({
		name: req.body.name,
		desc: req.body.desc,
		price: req.body.price
	})
	item.save(err => {
		if (err) {
			logger.error(err)
			res.sendStatus(500)
		} else {
			logger.info('Item saved!')
			res.status(200).send({message: 'Item saved'})
		}
	})
})

export default api
