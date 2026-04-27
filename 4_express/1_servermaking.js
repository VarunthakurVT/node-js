//express is the frame work of the node js
//it uses routing like /home page =redirects to the home page 
//routing types are get and post main 
const express=require('express')
const app=express()
const path = require("path")
const users = require("./users.json")
const aboutPageFileLocation = path.join(__dirname, "about.html")

const Port=3000;
app.get('/',(req,res)=>{
    res.send("hello ")
})
app.get('/login',(req,res)=>{
    res.send("login page")
})
app.get('/contact',(req,res)=>{
    res.sendFile(aboutPageFileLocation)
})
app.get("/users", (req, res) => {
    res.json({name : "varun ", age : 18, year : 2026,
        university : "Shoolini"
    })
})
app.get("/api/users"),(req,res)=>{
    res.json(users)
}
app.get("/api/users/:id", (req, res) => {
    const reqId = parseInt(req.params.id)
    const providedUser = users.find((user) => {
        return user.id == reqId
    })
    res.json(providedUser)
})

app.listen(Port,()=>{
    console.log(`server is running on port${Port}`)
})
//use nodemonxx