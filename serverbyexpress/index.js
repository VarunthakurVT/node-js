const express=require('express')
const app=express()
port=3000;
app.use((req,res,next)=>
console.log(req)
)
app.get('/',(req,res)=>{
    res.send(`welcome to home page
        <a href="/about">about page</a>`)
}
)
app.get('/about',(req,res)=>{
    res.send(`welcome to about page
        <a href="/">home</a>`)
})
app.listen(port,(res,req)=>{
    console.log("server is started")
})