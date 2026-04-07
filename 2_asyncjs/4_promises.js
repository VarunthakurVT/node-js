//promises have resolve reject when resolve we use .then for reject we use .catch and .finally always work 
const promise=new Promise((res,rej)=>{
    setTimeout(()=>{
        let a=3;
        if(a%2==0){
            res("promise is resolved")
        }else{
            rej("promise is rejected")
        }
    },1000)
    })
    promise
     .then(result=>console.log(result))
    .catch(err=>console.log(err))
    .finally(()=>console.log("always runs"))
    //we can make chain of the promises 
    // like this 
    
    var first=new Promise((res,rej)=>{
        return res("i am back home ")
    }
    )
 var second =first.then(data=>{
    console.log(data)
    return new Promise((res,rej)=>{
        return res("i am now playing game")
    })
})
  var third=  second.then(data=>{
        console.log(data)
    return new Promise ((res,rej)=>{
        return res("i am now doing coding")
    })
})
third.then(data=>{
    console.log(data)
})