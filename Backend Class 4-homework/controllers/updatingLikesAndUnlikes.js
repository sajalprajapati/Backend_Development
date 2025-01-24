import BLOG from "../models/Blog.js";
import USER from "../models/User.js";

export const likeThePost=async(req,res)=>
{
  try
  {
    const {id}=req.params;

    const response=await BLOG.findByIdAndUpdate(
        id, //<----kisko update karna hai
        {$inc:{likes:1}},
        {new:true}
    )


    if(!response)
    {
        return res.status(404).json({
            success: false,
            message: "Post not found. Unable to update likes.",
          });
    }

    res.status(200).json({
        success:true,
        data:response,
        message:"The likes have benn updated"
    })
  }

  catch(error)
  {
   
    res.status(500).json({
        success:false,
        data:error.message,
        message:"The post is not being liked .There is an issue in the calling."
    })
  }
}


export const unlikeThePost=async(req,res)=>
{
    try
    {
      const {id}=req.params;
  
      const response=await BLOG.findByIdAndUpdate(
          id, //<----kisko update karna hai
          {$inc:{unlikes:1}},
          {new:true}
      )
  
  
      if(!response)
      {
          return res.status(404).json({
              success: false,
              message: "Post not found. Unable to update likes.",
            });
      }
  
      res.status(200).json({
          success:true,
          data:response,
          message:"The likes have benn updated"
      })
    }
  
    catch(error)
    {
     
      res.status(500).json({
          success:false,
          data:error.message,
          message:"The post is not being liked .There is an issue in the calling."
      })
    }
}