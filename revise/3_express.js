const express=require('express')
const users=require('users.json')
const app= express()

const Port=3000;
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(function(req,res,next){
//     console.log(req)
//  next();
// })
app.get('/',(req,res)=>{
res.send("hello")
})
app.get('/profile/:username',(req,res)=>{
    res.send(`hello ${req.params.username}`)
})
app.listen(Port,()=>{
    console.log("server is running ")
})