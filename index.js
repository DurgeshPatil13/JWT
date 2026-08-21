const express=require("express")
const {dbconnection}=require("./connection")
const {router}=require("./Routes/user")
const app=express();
const PORT=8001;
app.use(express.urlencoded({extended:false}));
dbconnection("mongodb://localhost:27017/jwtproject").then(()=>{
    console.log("db starteed")
}).catch((err)=>{
    console.log(err)
})
app.use("/user",router)
app.listen(PORT,()=>{
    console.log("strted")
});