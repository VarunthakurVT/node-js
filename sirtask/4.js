function login(username,password){
    return new Promise((resolve,reject)=>{
        console.log("checking the creadts")
        setTimeout(() => {
            if(username=="admin"&&password=="1234"){
                resolve("Sucess welcome to admin dashboard")
            }
            else{
                reject("Earror:invalid username and password")
            }
        
        }, 100);
    })

}
console.log("attempt 1")
login("admin",1234)
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("login attempt 1")
})
