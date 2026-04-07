function fetchData(callback){
    setTimeout(()=>{
        const data={name:"varun",id:1};
   callback(data); },1500);
}
fetchData((result)=>{
    console.log("data is receaved",result)
})