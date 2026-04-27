const os = require('os');
console.log(os.platform());
setTimeout(()=>{
    console.log("this will run after 5 second")
},5000)
let count=0
const interval=setInterval(()=>{
    console.log("this will run after every 3 second")
    count++;
    if(count==5){
        clearInterval(interval)
    }
},3000)


//promises 
const myPromise=new Promise((res,rej)=>{
    setTimeout(()=>{
        const success=true
        if(success){ res("promise is resolved")}
            else{ rej("promise is rejected ")}
    },2000);
})
 myPromise.then(result=>console.log(result))
 .catch(()=>console.log(err))
 .finally(()=>console.log("i work every time"))
