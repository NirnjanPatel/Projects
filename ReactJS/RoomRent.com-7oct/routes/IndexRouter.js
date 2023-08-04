import express from 'express';
import IndexController from '../controller/IndexController.js';
//import * as cryptoAPI from './crypto.js';

const router = express.Router();

/* Middleware to handle cookie data */
var cunm="";
var cpass=""; 
router.use("/login",(req,res,next)=>{
 if(req.cookies.cunm!=undefined)
 {
  cunm=req.cookies.cunm;
  cpass=req.cookies.cpass;
 }
 next();
})

router.get("/",(req,res)=>{ 
 res.render("index"); 
});

router.get("/about",(req,res)=>{
 res.render("about"); 
});

router.get("/contact",(req,res)=>{ 
 res.render("contact"); 
});

router.get("/service",(req,res)=>{ 
 res.render("service"); 
});

router.get("/register",(req,res)=>{ 
 res.render("register",{"output":""}); 
});

router.post("/register",(req,res)=>{
 //console.log(req.body);     
 IndexController.userRegister(req.body).then((result)=>{
  res.render("register",{"output":"User register successfully...."});  
 }).catch((err)=>{
  res.render("register",{"output":err});
 });
});

router.get("/login",(req,res)=>{ 
 if(req.session.sunm!=undefined)
 {
  req.session.sunm=undefined;
  req.session.srole=undefined;       
 }   
 res.render("login",{"output":"","cunm":cunm,"cpass":cpass});  
});

router.post("/login",(req,res)=>{
 IndexController.userLogin(req.body).then((result)=>{
    if(result.rescode==1 || result.rescode==2)
    {
     req.session.sunm=result.userDetails.email;
     req.session.srole=result.userDetails.role;

     if(req.body.chk!=undefined)
     {
      res.cookie("cunm",result.userDetails.email,{maxAge : 3600000});
      res.cookie("cpass",result.userDetails.password,{maxAge : 3600000});    
     }

    }

    result.rescode==0
    ?res.render("login",{"output":"Invalid user or verify account...."})
    :(result.rescode==1
        ?res.redirect("/admin")
        :res.redirect("/user"));
 }).catch((err)=>{
    res.render("login",{"output":err,"cunm":cunm,"cpass":cpass});
 });
});

export default router;