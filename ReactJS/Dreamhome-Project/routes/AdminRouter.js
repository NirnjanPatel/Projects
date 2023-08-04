import express from 'express';
import AdminController from '../controller/AdminController.js';
import * as url from 'url';
import * as path from 'path';

const router = express.Router();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


// middleware to apply security for admin route
/*
router.use((req,res,next)=>{
 if(req.session.sunm==undefined || req.session.srole!="admin")
  res.redirect("/login");
 else
  next();   
});
*/  

// middleware to fetch category details
var clist;
router.use("/addsubcategory",(req,res,next)=>{
 AdminController.fetchCategory({}).then((result)=>{
  clist=result;
  next(); 
 }).catch((err)=>{
  console.log(err);
 });
});

router.get("/",(req,res)=>{ 
 res.render("Admin/adminhome",{"sunm":req.session.sunm}); 
});

router.get("/manageusers",(req,res)=>{ 
 AdminController.manageUsers({"role":"user"}).then((result)=>{
  res.render("Admin/manageusers",{"userDetails":result,"sunm":req.session.sunm});
 }).catch((err)=>{
  console.log(err);   
 })
});

router.get("/manageuserstatus",(req,res)=>{ 
 var urlobj=url.parse(req.url,true).query;  
 AdminController.manageUserStatus(urlobj).then((result)=>{
  res.redirect("/admin/manageusers");
 }).catch((err)=>{
  console.log(err);   
 })
});

router.get("/addcategory",(req,res)=>{ 
 res.render("Admin/addcategory",{"sunm":req.session.sunm,"output":""}); 
});

router.post("/addcategory",(req,res)=>{ 
 var catname=req.body.catname;
 var fileobj=req.files.caticon;
 var caticonname=Date.now()+"-"+fileobj.name;
 AdminController.addCategory(catname,caticonname).then((result)=>{
  var uploadpath=path.join(__dirname,"../public/Uploads/categoryicons",caticonname);
  fileobj.mv(uploadpath);
  res.render("Admin/addcategory",{"sunm":req.session.sunm,"output":"Category Added Successfully...."});
 }).catch((err)=>{
  res.render("Admin/addcategory",{"sunm":req.session.sunm,"output":err}); 
 });
});

router.get("/addsubcategory",(req,res)=>{ 
  res.render("Admin/addsubcategory",{"sunm":req.session.sunm,"output":"","clist":clist}); 
 });
 
 router.post("/addsubcategory",(req,res)=>{ 
  var catname=req.body.catname;
  var subcatname=req.body.subcatname;
  var fileobj=req.files.caticon;
  var subcaticonname=Date.now()+"-"+fileobj.name;
  AdminController.addSubCategory(catname,subcatname,subcaticonname).then((result)=>{
   var uploadpath=path.join(__dirname,"../public/Uploads/subcategoryicons",subcaticonname);
   fileobj.mv(uploadpath);
   res.render("Admin/addsubcategory",{"sunm":req.session.sunm,"output":"Sub Category Added Successfully....","clist":clist});
  }).catch((err)=>{
   res.render("Admin/addsubcategory",{"sunm":req.session.sunm,"output":err,"clist":clist}); 
  });
 });


router.get("/cpadmin",(req,res)=>{ 
 res.render("Admin/cpadmin",{"sunm":req.session.sunm,"output":""}); 
});

router.post("/cpadmin",(req,res)=>{ 
  AdminController.manageUsers({"email":req.session.sunm,"password":req.body.opass}).then((result)=>{
    var msg;
    if(result.length==0)
      res.render("Admin/cpadmin",{"sunm":req.session.sunm,"output":"Invalid old password , please try again"});  
    else
    {
      if(req.body.npass!=req.body.cnpass)
        res.render("Admin/cpadmin",{"sunm":req.session.sunm,"output":"New & Confirm new password mismatch"});
      else
      {
        AdminController.cpAdmin(req.session.sunm,req.body).then((result)=>{
          res.render("Admin/cpadmin",{"sunm":req.session.sunm,"output":"Password changed successfully , please login again...."});
        }).catch((err)=>{
          console.log(err);  
        });
      }  
    }    
    
  }).catch((err)=>{
    console.log(err);  
  });  
});


router.get("/epadmin",(req,res)=>{ 
 AdminController.manageUsers({"email":req.session.sunm}).then((result)=>{
  var m="",f="";
  if(result[0].gender=="male")
    m="checked";      
  else
    f="checked";   
  res.render("Admin/epadmin",{"userDetails":result[0],"m":m,"f":f,"sunm":req.session.sunm,"output":""});
 }).catch((err)=>{
  console.log(err); 
 }); 
});

router.post("/epadmin",(req,res)=>{ 
 AdminController.epAdmin(req.body).then((result)=>{
  res.redirect("/admin/epadmin"); 
 }).catch((err)=>{
  console.log(err);
 });
});


export default router;