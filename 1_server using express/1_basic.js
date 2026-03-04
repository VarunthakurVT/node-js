//first do nbm init to initialize server using express
const express=require("express") //doing require the server 
const app=express() //creating the server instance(A specific copy of something created from a class or template.)
app.get("/",(req, res)=>{  //the request we get form user and the response we send form server form res obj
    res.send("hello world")
})
app.get("/about",(req,res)=>{
    res.send("about page")
})
app.listen(3000) //use to start server //3000 is the port number