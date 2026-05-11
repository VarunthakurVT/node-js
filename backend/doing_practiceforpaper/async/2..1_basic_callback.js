function getData(callback){
    const data={name:"varun",age:18}
    callback(data);
}
getData((result)=>{
    console.log("result",result)
})