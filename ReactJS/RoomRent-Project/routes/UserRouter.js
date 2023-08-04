import express from 'express';
const router = express.Router();

router.get("/",(req,res)=>{ 
 res.send("<h1>/userhome url invoked , user panel</h1>"); 
});

router.get("/cpuser",(req,res)=>{ 
 res.send("<h1>/cpuser url invoked , user panel</h1>"); 
});

router.get("/epuser",(req,res)=>{ 
 res.send("<h1>/epuser url invoked , user panel</h1>"); 
});

router.get("/logout",(req,res)=>{ 
 res.send("<h1>/logout url invoked , admin panel</h1>"); 
});

export default router;