const express=require('express')
const app=express()
const path=require('path')
const port=3000
app.set("view engine","ejs")
app.use((req,res,next)=>{
    // console.log(req)
    next()
})
// app.get ('/home',(req,res)=>{
//     res.send(`
//         <a href="/">go to home page<a>`)
// })
app.get('/',(req,res)=>{
res.render("index",{age:12});
})
app.get('/account/:username',(req,res)=>{
    res.send(`welcome ${req.params.username}`)

}) 
app.get('*',(req,res)=>{
    res.send("404 server not found")})

app.listen(port,()=>{
    console.log("server is running")
})
