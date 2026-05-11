let timeout=setTimeout(()=>{
    console.log("this work after 2 second");
},2000)
console.log("hello")
let count=0
const color=["Red","yellow","green"]
let interval=setInterval(() => {
   console.log( color[count]);
   
  count = (count + 1) % color.length;

}, 3000);
let time =setTimeout(()=>{
    clearInterval(interval)
},30000)