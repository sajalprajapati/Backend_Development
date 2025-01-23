import mongoose from "mongoose";
import BLOG from "../models/Blog.js";
import USER from "../models/User.js";
// import { response } from "express";


//router.get('/posts/all',);
export const getAllthePost=async(req,res)=>
{
  try
  {
     const mongo_response=await BLOG.find({});

     if(mongo_response.length===0) //if it is empty
     {
       return res.status(204).json({
        success:true,
        message:"No blog has ever been created"
       })
     }


     res.status(200).json({
        success:true,
        data:mongo_response,
        message:"Yeah rha apka data"
     })
  }

  catch(error)
  {
    res.status(500).json({
        success:false,
        data:"internal server error",
        message:error.message
     })
  }
}



// router.get('/posts/:id',);
export const getAlltheUserPost=async(req,res)=>
    {
      try
      {
         const id=req.params.id;
         const mongo_response=await BLOG.find({author:id});

         if(mongo_response.length===0)
         {
            return res.status(404).json({
                success:true,
                message:"No blog of this id user has been created"
               })
         }
  
         res.status(200).json({
            success:true,
            data:mongo_response,
            message:"Yeah rha apka data"
         })

      }
    
      catch(error)
      {
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
         })
      }
    }