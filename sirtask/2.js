let count =0;
const interval=setInterval(()=>{
    console.log("hello")
    count++
    
    if(count==5){
        clearInterval(interval)
    }
},1000)
setTimeout(()=>{
    console.log("Finished")
},6000)