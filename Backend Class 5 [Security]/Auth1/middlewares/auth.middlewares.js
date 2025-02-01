import USER from "../models/User.js";
import jwt from 'jsonwebtoken';
import { configDotenv } from "dotenv";
configDotenv();


//auth,isStudent,isAdmin

export const auth=async(req,res,next)=>
{
  try
  {
     //token ko extract karo ...
     //Pending :other ways to fetch token..
     const token=req.cookies.jwt;

     if(!token)
     {
        return res.status(400).json({success:false,message:`The token that is being extracted is missing !`});
     }

     //now we have get the token ..we have to verify whether it is same token 
     //to encrypt or not.......

     const decoded=jwt.verify(token,process.env.JWT_SECRET);

    if(!decoded)
    {
        return res.status(400).json({success:false,message:`token is invalid`})
    }

    console.log("Kya data hai decode main yani token ke under woh de denge...."+decoded);


    req.user=decoded;

    next();
  }

  catch(error)
  {
    return res.status(401).json({success:false,message:`Internal Server Error`})
  }
}


export const isStudent=async(req,res)=>
{
  try
  {
    if(req.user.role!=="Student")
    {
        return res.status(401).json({
            success:false,
            message:`This is a protectedRoute for student`
        })
    };


    next();
  } catch(error)
  {
    return res.status(500).json({
        success:false,
        message:`User role can't be verified.`
    })
  }

  
}


export const isAdmin=async(req,res)=>
{
    try
    {
      if(req.user.role!=="Admin")
      {
          return res.status(401).json({
              success:false,
              message:`This is a protectedRoute for admin`
          })
      };
  
  
      next();
    } catch(error)
    {
      return res.status(500).json({
          success:false,
          message:`User role can't be verified.`
      })
    }
}