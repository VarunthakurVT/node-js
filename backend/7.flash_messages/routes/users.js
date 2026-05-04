const mongoose=require('mongoose') 
const express = require('express');
const router = express.Router();
mongoose.connect("mongodb://127.0.0.1:27017/testingedkgame2");
const userSchema=mongoose.Schema({
  username:String,
  nickname:String,
  password:String,
  categories:{
    type:Array,
    default:[]
  },
  datecreated:{
    type:Date,
    default:Date.now()
  }
})
const userModel=mongoose.model("user",userSchema );
module.exports=userModel;