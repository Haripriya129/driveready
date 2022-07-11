var mongoose = require('mongoose');
var usertheatreschema = mongoose.Schema({
	name:String,
	theatrename:String,
	moviename:String,
	seats:Number,
	timer:Number,
	cost:Number
});
module.exports = mongoose.model('usertheatre',usertheatreschema,'usertheatres');
