import mongoose from 'mongoose'

const itemSchema = mongoose.Schema({
	name: String,
	desc: String,
	price: Number,
	inStock: Boolean
},{
	timestamps: true
})

const Item = mongoose.model('Item', itemSchema)

export default Item
