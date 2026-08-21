const mongoose=require("mongoose")
async function dbconnection(link){
 return mongoose.connect(link)
}
module.exports={
    dbconnection
}