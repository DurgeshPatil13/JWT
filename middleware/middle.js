const jwt=require("jsonwebtoken")
function middlewarecheck(req,res,next) {
    const usertoken=req.cookies.uid;
    if(!usertoken) 
       return res.redirect("/user/login")
      try{  
    jwt.verify(usertoken,"xyz@69-69-")
    next();
  }
    catch(err){
        res.json("rejected")
    }
 }
 module.exports={
    middlewarecheck,
 }