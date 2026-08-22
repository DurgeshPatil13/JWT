const express=require("express")
const {middlewarecheck}=require("../middleware/middle")
const { createuser,loginuser}=require("../controllers/user")
const router=express.Router();
router.post("/signup",createuser)
router.post("/login",loginuser)
router.get("/profile",middlewarecheck)
module.exports={
    router
}