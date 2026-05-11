const fs =require('fs')
fs.writeFile('file.txt',"hi my is varun ",(err,data)=>{
    if(err){
        console.error(err)
    }else{
        console.log("writting sucess")
    }

})
fs.readFile("file.txt",'UTF-8',(err,data)=>{
    if(err){
        console.err(err)
    }else{
        console.log(data)
    }
})
fs.unlink('file.txt',(err,data)=>{
    if(err){
        console.err(err)
    }else{
        console.log("file deleted ..")
    }
})