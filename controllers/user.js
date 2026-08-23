const {User}=require("../model/user")
const {setuserjwt}=require("../controllers/jwt")
const bcrypt = require("bcrypt");
async function createuser(req,res) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user=await User.create({
        Name:req.body.Name,
email:req.body.email,
password:hashedPassword
    })
    return res.json(user)
}
async function loginuser(req,res) {
    const user= await User.findOne({ email: req.body.email})
    if(!user) return res.json("not found!!")
     else {
     const isMatch = await bcrypt.compare(
    req.body.password,
    user.password
)
if(isMatch) {
    const token=setuserjwt(user)
    res.cookie("uid",token)
 return res.json("all good")
}
    res.json("wrong pass")
};

}
async function accessprovider(req,res) {
    return res.json("you can accesss")
}
module.exports={
createuser,
loginuser,
accessprovider
}