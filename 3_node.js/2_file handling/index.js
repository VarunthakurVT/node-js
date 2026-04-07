const fs=require("fs")//this the file system module to intract with file 
//sync
// fs.writeFileSync('myFile.txt',"hi this file created using fs module")
//async
fs.writeFile('myfile.txt',"this file created using the async way",(err,data)=>{
if(err){
    console.log(err);}
    else{
        console.log("file write success")
    }
})
//async reading file 
const data=fs.readFile("./myfile.txt","utf-8",(err,data)=>{
    if(err){console.log(err)}
    else(
        console.log(data)
    )
})
//async append
fs.appendFile("myfile.txt","this i append in the file",(err,data) =>{
    if(err){console.log("earror");

    }else{
        console.log("append success")
    }})

//async copy 
fs.cp("myFile.txt","./thisiscopyfile.txt",(err,data)=>{
    if(err)console.log("err")
    else console.log("new file created ")
})
fs.unlink("./thisiscopyfile.txt",(err,data)=>{
    if(err)console.log("earr")
    else console.log("deleted")
})