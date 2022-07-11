var mongoose = require('mongoose');
var theatreschema = mongoose.Schema({
	theatrename:String,
	moviename:String,
	seats:Number

});
module.exports = mongoose.model('theatre',theatreschema,'theatres');