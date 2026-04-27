//create server
const http=require('http')
const port=3000;
const server=http.createServer((req,res)=>{
    if(req.url=='/')
        {console.log("homepage")
        }
    else if(req.url=='/contact')
     {console.log("contact page")}
})
server.listen(port,()=>{
    console.log("server is running ")
})