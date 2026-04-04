let count=1
let interval=setInterval(()=>{
    console.log("i run after 1 second",count++)

if(count==6)clearInterval(interval)},1000);