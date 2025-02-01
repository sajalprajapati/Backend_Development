import express from 'express'
import {login,signup} from "../controllers/Auth.js";
import { auth,isAdmin,isStudent } from '../middlewares/auth.middlewares.js';
const router=express.Router();
router.post("/login",login);
router.post("/signup",signup);

//Protected Route:
router.get('/student',auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:`Welcome to the  Students Page`
    });
})



router.get('/admin',auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:`Welcome to the  Admin Page`
    });
})



router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:`Welcome to the  Testing Route !!!!`
    });
})

export default router;