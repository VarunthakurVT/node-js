var express = require('express');
var router = express.Router();
const userModel=require("./users")
/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Flash Messages App' })

});
router.get('/hi',function(req,res){
  res.send("hi")
})
router.get('/error',function(req,res){
  req.flash("age",12)
  req.flash("name","Varunthakur")
  res.send("error")
})
router.get('/checkdata',function(req,res){
  console.log(req.flash("age"))
  console.log(req.flash("name"))
  res.send("check the terminal")
})
router.get('/create',async function(req,res){
 let userdata= await userModel.create({
    username:"asdf_thakur435",
    name:"asdf53",
    password:"q5wertys",
    categories:['js','node','python'],

  });
  res.send(userdata)
  }) 
  
  router.get('/find',async function(req,res){
    var regexp= new RegExp('Varun_thaKur','i')
    let user=await userModel.find({username:regexp})
    res.send(user)
  })
  router.get('/findc',async function(req,res){
    var user=await userModel.find({categories:{$all:["js","node"]}});
    res.send(user)
  })
  router.get("/findd",async function(req,res){
    var date1=new Date('2026-05-04')
    var date2=new Date('2026-05-05')
    var user=await userModel.find({datecreated:{$gte:date1,$lte:date2}})
    res.send(user)
  })

module.exports = router;
