const jwt=require("jsonwebtoken")
const secretkey="xyz@69-69-"
function setuserjwt(user){
    const payload={
        Name:user.Name,
        email:user.email,
        
    }
    return jwt.sign(payload,secretkey)
}
module.exports={
    setuserjwt
}