var mongoose = require('mongoose');
var userschema = mongoose.Schema({
	name:String,
	email:String,
	password:String,
	

});
module.exports = mongoose.model('user',userschema,'users')