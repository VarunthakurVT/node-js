const express=require('express')
const app =express()
//static file 
app.use(express.static('public'))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index",{age:12})
})
app.get("/ai",(req,res)=>{
    res.render("ai")
})
app.get("/error",(req,res,next)=>{
    throw new Error("somthing went wrong")
})
function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}

app.use(errorHandler)

app.listen(3000)