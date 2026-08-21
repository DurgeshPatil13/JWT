const express=require("express")
const { createuser,loginuser}=require("../controllers/user")
const router=express.Router();
router.post("/signup",createuser)
router.post("/login",loginuser)
module.exports={
    router
}