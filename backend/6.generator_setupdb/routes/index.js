var express = require('express');
var router = express.Router();

const userModel = require('./users');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create',async function(req,res){
  await userModel.create({
    username:"varunthakur",
    age:18,
    name:"varun"
  })
  res.send("user is created")
})
module.exports = router;
