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
router.get("/allusers",async function(req,res){
  let allUsers=await userModel.findOne({username: "varunthakur"})
  res.send(allUsers);
})
router.get("/delete",async function(req,res){
  let deletedUser=await userModel.findOneAndDelete({
    username:"Varunthakur"
  })
  res.send(deletedUser);
})
router.get("/find",async function(req,res){
  let allUsers=await userModel.find()
  res.send(allUsers)
})
router.get("/ban",function(req,res){
  req.session.koibhikam="hello";
  req.session.banned=true;
})
router.get("/checkban",function(req,res){
  console.log(req.session);
  res.send("check the console")
  if(req.session.banned==true){
    res.send("you are banned ")
  }
})

// This route sets the cookie
router.get('/login', (req, res) => {
    res.cookie('sessionID', '12345ABC', {
        httpOnly: true,
        maxAge: 3600000 // 1 hour
    });
    res.send("Logged in and cookie set!");
});

// This route reads the cookie
router.get('/profile', (req, res) => {
    const sid = req.cookies.sessionID;
    if (sid) {
        res.send(`Welcome back! Session: ${sid}`);
    } else {
        res.send("Please log in first.");
    }
});

module.exports = router;

module.exports = router;
