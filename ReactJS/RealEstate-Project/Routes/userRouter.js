import express from "express";
import adminController from "../Controller/adminController.js";
import userController from "../Controller/userController.js";

const router = express.Router();

// middleware to apply security for user route
/*
router.use((req,res,next)=>{
 if(req.session.sunm==undefined || req.session.srole!="user")
  res.redirect("/login");
 else
  next();   
});
*/

// middleware function to get category list
var clist;
router.use("/viewsubcategory/:catname", (req, res, next) => {
  adminController
    .fetchCategory({})
    .then((result) => {
      clist = result;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/", (req, res) => {
  res.render("User/userHome", { sunm: req.session.sunm });
});

router.get("/searchproduct", (req, res) => {
  adminController
    .fetchCategory({})
    .then((result) => {
      //console.log(result);
      res.render("User/searchproduct", {
        sunm: req.session.sunm,
        clist: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/viewsubcategory/:catname", (req, res) => {
  //console.log(req.params);
  userController
    .fetchSubCategory(req.params)
    .then((result) => {
      //console.log(result);
      res.render("Admin/viewsubcategory", {
        sunm: req.session.sunm,
        clist: clist,
        sclist: result,
        catname: req.params.catname,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/funds", (req, res) => {
  var paypalURL = "https://www.sandbox.paypal.com/cgi-bin/webscr";
  var paypalID = "sb-dll43818072375@business.example.com";
  var amount = 100;
  // sb-fbih321458898@personal.example.com
  res.render("User/funds", {
    sunm: req.session.sunm,
    paypalURL: paypalURL,
    paypalID: paypalID,
    amount: amount,
  });
});

router.get("/payment", (req, res) => {
  res.redirect("/user/success");
});

router.get("/success", (req, res) => {
  res.render("User/success", { sunm: req.session.sunm });
});

router.get("/cancel", (req, res) => {
  res.render("User/cancel", { sunm: req.session.sunm });
});

router.get("/logout", (req, res) => {
  res.send("<h1>/logout url invoked , admin panel</h1>");
});

export default router;
