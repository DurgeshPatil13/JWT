const mongoose=require("mongoose")
const userscehma=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    email:{
         type:String,
        required:true
    },
      password:{
         type:String,
        required:true
    },
})
const User=mongoose.model("user",userscehma)
module.exports={
    User
}
