const express = require('express')
const app =express()
const userRoute = require("./routes/userRoute")
const adminRoute = require("./routes/adminRoute")
const bodyParser=require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use("/admin",adminRoute);
app.use("/",userRoute);

app.set("view engine","hbs")
app.set("views","./views")

// app.get("/",(req,res)=>
// {
//     res.render("login");
// });
// app.get("/signup",(req,res)=>
// {
//     res.render("signup");
// });
// app.get("/userhome",(req,res)=>
// {
//     res.render("userhome");
// });
// app.get("/admin",(req,res)=>
// {
//     res.render("adminlogin");
// });
// app.get("/adminPanel",(req,res)=>
// {
//     res.render("adminPanel");
// });
// app.get("/updateUser",(req,res)=>
// {
//     res.render("updateUser");
// });

app.listen(3000,() => {
    console.log("Server Started")
})