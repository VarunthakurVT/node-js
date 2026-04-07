//this is set time out part of async js

console.log("first");
setTimeout(() => {
  console.log(" third i will run after 1 second");
}, 1000);
console.log("second");
setTimeout(() => {
  console.log("forth i will run after 2 second");
}, 2000);
setTimeout(()=>
{ console.log("i will run after 9 seconds ");
    },9000)
setTimeout(()=>{
    console.log("i will run after 10 second")
},10000) 
//sync code go to main stack and the a sync code go to side stack and side stack run after main stack 
//event loop work is side stack to main stack go the task 