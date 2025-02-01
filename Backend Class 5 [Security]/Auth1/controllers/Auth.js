// import USER from "../models/User.js";
import bcrypt from 'bcrypt';
import USER from "../models/User.js";
import jwt from 'jsonwebtoken';
import { configDotenv } from "dotenv";
configDotenv();


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







//setting up the JWT and cookies here....
export const login =async(req,res)=>
{
  try
  {
    const {email,password}=req.body;

    if(!email || !password)
    {
        return res.status(400).json({
            success:false,
            message:"Either email or password is empty!"
        })
    }



    let  existingUser=await USER.findOne({email});

    if(!existingUser)
    {
        return res.status(400).json({
            success:false,
            message:"User not exists! Please sign up first......."
        })
    }


    const payload={email:existingUser.email,id:existingUser._id,role:existingUser.role}; //payload mean data to be sent okay.....
   //verifying password and 
   if(await bcrypt.compare(password,existingUser.password))
   {
      //1.....generate jwt token....
      let token= jwt.sign(payload,process.env.JWT_SECRET,{ expiresIn:"31d"});
      //2....ab token ko cookie ke sath bhejenge....
      existingUser = existingUser.toObject(); // Convert Mongoose document to plain object
      existingUser.token = token; // Now we can add a temporary token field
      existingUser.password = undefined; // Remove password from the response

      //3...creating a cookie...
      
      res.status(200) // Set status first for better readability
     .cookie("jwt", token, 
        {
         httpOnly: true,   // Prevents access from JavaScript (XSS protection)
         secure: true,     // Ensures cookie is only sent over HTTPS
         sameSite: "Strict", // Prevents CSRF attacks (use "Lax" if needed for third-party logins)
         expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Cookie expires in 7 days
         path: "/", // Makes cookie available for the entire site
        }
           )
     .json({
        success: true,
        token, // You may omit this if you only use the cookie for authentication
        user: existingUser, // Renamed for better readability
        message: "Logged in Successfully",
         });

   }

   else
   {
    //password mathc nhi hue...
    return res.status(403).json({
        success:false,
        message:"Password Don't match!!!!!!!"
    })
   }

  }

  catch(error)
  {
    console.log(error)
    return res.status(500).json({
        success:false,
        message:"Error in log in page..."
    })
  }
}


