const { resolve } = require("path");

//1)is set ime out works after some delay 
console.log("Start")
setTimeout(()=>{
    console.log("stop")},1000
)
console.log("hi")

//2)set interval-- it is used to make work repeat after specific time later
let a=0;
const interval=setInterval(()=>{
    console.log(`i work after 1 second ${a++}`)
    if(a==5){
        //3) clear timeout and clear interval is used to stop the timeout(never runs ) and the interval 
        clearInterval(interval)}},1000)
    
// 4)callback code 
function fatchdata(callback){
    setTimeout(() => {
        const data={name:"varun",id:101};
        callback(data)

    }, 1000);

}
fatchdata((result)=>{
    console.log("data is received",result)
})

//5)promises have resolve and reject when resolve we use .then and when rej we use .catch and if we want that work so we use .finally 

const myPromise=new Promise((res,rej)=>{
    setTimeout(()=>{
        const success=true;
        if(success){
            res("promise is resolved")
        }else{
            rej("promise is reject")
        }},2000);
});
myPromise.then(result=>console.log(result))
myPromise.catch(err=>console.log(err))
myPromise.finally(()=>console.log("i work every time "))

//fetch api --combine multiple.then one after then 
fetch('https://randomuser.me/api/')
.then (response=>response.json)
.then(data=>console.log(data))
.catch(error=>console.log("error"))