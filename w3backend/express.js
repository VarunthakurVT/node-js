// express is the framework of the node 
const express=require("express")
const app=express()
app.get('/',(req,res)=>{
res.send("hello")
})
app.listen(8000,()=>{
console.log("server is running on port 8000")
}
)