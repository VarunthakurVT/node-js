//steps to create data base 
// 1.install mongodb 
// 2. install mongoose js ---npm i mongoose
// 3. require and setup collection 
// 4 make sechema 
// 5 .create the schema and export

//require and set up
 
const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/learn")
//schema
const userschema=mongoose.Schema({
    username:String,
    name:String,
    age:Number
})
//model 
module.exports=mongoose.model("User",userschema)