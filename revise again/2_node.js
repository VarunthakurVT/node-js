// 1)server making
const http=require("http")
const port=3000;
const server=http.createServer((req,res)=>{
if(req.url=='/'){
    console.log("home page");
}
else if(req.url=="/contact"){
    console.log("contact page");
}
});
server.listen(port,()=>{
console.log("server is running..")});