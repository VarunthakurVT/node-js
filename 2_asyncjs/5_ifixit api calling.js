// fetch('https://www.ifixit.com/api/2.0/guides')
//     .then((raw)=>{
//         return raw.json()
//     })
//     .then((data)=>
//     console.log(data))
    
 //this is the long way to resolve this we use async await
 async function fatchguides(){
   let raw= await fetch("https://www.ifixit.com/api/2.0/guides")
   let ans=await raw.json()
   console.log(ans)
 }
 fatchguides()
 