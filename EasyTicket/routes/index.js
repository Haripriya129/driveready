var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Booking');
var db = mongoose.connection;
var user=require('../models/user');
var theatre=require('../models/theatre');
var usertheatre=require('../models/usertheatre');
router.get('/',function(req,res){
  res.render('index');
});
router.get('/prologin',function(req,res){
  res.render('prologin');
});
router.get('/register22',function(req,res){
  res.render('register22');
});
router.get('/wt111',function(req,res){
  res.render('wt111');
});
router.get('/mainmenu',function(req,res){
  res.render('mainmenu');
});
router.post('/userregistration',function(req,res){
  console.log("got here");
  var clientdata={
    name: req.body.name,
    
    email: req.body.email,
    password: req.body.password
  };
  user.insertMany([clientdata],function(err,docs){
    if(!err){
      console.log(docs);
      res.redirect('/prologin');
    }else{
      console.log(err);
      res.redirect('/register22');
    }
  })
});
router.post('/userlogin',function(req,res){
  var email=req.body.email;
  var password=req.body.password;
  user.findOne({ email: email, password: password},function(err,user){
    if(user){
      res.redirect('/mainmenu');
    }else{
      res.redirect('/prologin');
    }
  })
});
module.exports = router;
