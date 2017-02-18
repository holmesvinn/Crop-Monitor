var restful = require('node-restful');
var mongoose = restful.mongoose;

var statusSchema = new mongoose.Schema({
	eventname: String,
	category: String,
	description: String,
	Rules: String,
	venue: String,
	contact: String,
	imgurl: String
});
module.exports = restful.model('tablestatus',statusSchema);