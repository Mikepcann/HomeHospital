/**
 *  TODO
 * validate province code (ab,mb,bc etc)
 */
import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
	streetNum: {
		type: String,
		required: true,
		maxlength: 8
	},
	streetName: {
		type: String,
		required: true,
		maxlength: 30
	},
	cityName: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 30
	},
	provName: {
		type: String,
		required: true,
	},
	postalCode: {
		type: String,
		required: true,
		minlength: 6,
		maxlength: 6,
	},
	country: {
		required: true,
		default: 'Canada'
	}, 
	_id: false
})

export default addressSchema
