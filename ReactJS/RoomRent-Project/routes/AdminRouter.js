import express from 'express';
const router = express.Router();

router.get("/",(req,res)=>{ 
 res.send("<h1>/adminhome url invoked , admin panel</h1>"); 
});

router.get("/cpadmin",(req,res)=>{ 
 res.send("<h1>/cpadmin url invoked , admin panel</h1>"); 
});

router.get("/epadmin",(req,res)=>{ 
 res.send("<h1>/epadmin url invoked , admin panel</h1>"); 
});

router.get("/manageusers",(req,res)=>{ 
 res.send("<h1>/manageusers url invoked , admin panel</h1>"); 
});

export default router;