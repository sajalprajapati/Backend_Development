// import USER from "../models/User.js";
import bcrypt from 'bcrypt';
import USER from "../models/User.js";


export const signup=async(req,res)=>
{
   try
   {
     //get data;
     const {name,email,password,role}=req.body;


     //validation part will be done here but right now we are
     //skipping....


     //check if user already exists.
     const existingUser=await USER.findOne({$or:[{email},{name}]});


     if(existingUser) //if user exist in the database...
     {
       return res.status(400).json({
        success:false,
        message:"Name or email  already exists"
       });
     }



     //secure password.....
    let attempts=0;
    let maxAttempts=3;
    let hashedPassword;
    while(attempts<maxAttempts)
    {
        
        try
        {
           hashedPassword=await bcrypt.hash(password,10);
           break;
        }
   
        catch(error)
        {
            attempts++;
           return res.status(500).json({
               success:false,
               message:'Error in hasing password'
           })
        }
   
    }


     //creating the user...
     const user=await USER.create({
        name,email,password:hashedPassword,role
     })

     return res.status(201).json({
        success:true,
        message:"User Created Successfully"
     })
   }
   
   catch(error)
   {

    if (error.code === 11000) {
        return res.status(400).json({
            success: false,
            message: "Duplicate entry for Name or Email",
        });
    }


    res.status(500).json({
        success:false,
        message:"Internal Server Error",
        error:error.message
       });
   }
}








export const login =async(req,res)=>
{
  
}


