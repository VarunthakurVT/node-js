// express is just the frame work of the node 
//it make easy to do code with node
const express=require('express')
const app = express()
app.use(function(req,res,next){
    console.log("hello i am middleware")
    next();
})
app.get('/',function(req,res){
    res.send("Hello")
})
app.get('/profile',(req,res)=>{
    res.send("this is the profile page ")
})
app.get('/home',(req,res)=>{
    res.send("this is the home page")
})
app.get('/profile/:username',(req,res)=>{
    res.send(`hello form ${req.params.username}`)
})
app.listen(3000)