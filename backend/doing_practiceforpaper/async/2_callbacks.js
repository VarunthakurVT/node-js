function checkInventory(){
    const promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        
        console.log("checking inventory..")
        resolve()
        // reject (new Error('failed to check the inventory'))
    }, 2000);
     
} )
return promise
}

function createOrder(){
    const promise= new Promise((resolve,reject)=>{
        
        setTimeout(() => {
            
            console.log("creating order")
            resolve()
        }, 1000);
    }
)
    return promise;
}
function createPayment(){
  const promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        
        console.log("creating a payment")
        let error=null;
        let chargedAmount=1000
       resolve()
    }, 2000);
  })

  return promise;
 }
function sendInvoice(){
    const promise= new Promise((resolve,reject)=>{

        setTimeout(() => {
            
            console.log("sending  invoice ..")
           resolve()
        }, 1000);
    })
    return promise;
}
async function main (){

   await checkInventory();
   await createOrder();
    await createPayment();
   await sendInvoice();


    // checkInventory().then(createOrder).then(createPayment).then(sendInvoice).catch((err)=>{
    //     console.log('error',err)});

    
    //this is the call back hell 
// checkInventory(()=>{
//     createOrder((()=>{
//         createPayment((error,chargedAmount)=>{
//             if(error){
//                 console.log("handling error")
//             }
//             console.log("charged:",chargedAmount)
//             sendInvoice(()=>{
//                 console.log("all done ")
//             })
//         })

//     }))
// });
// createPayment();
// sendInvoice();

    
}
 main()