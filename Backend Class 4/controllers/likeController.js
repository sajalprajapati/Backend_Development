// import Comment from '../models/commentModel.js';
import Post from "../models/postModel.js";
import Like from "../models/likeModel.js";

//business logic:
export const  Liked=async(req,res)=>
{
    try
    {
     //pehle object create karna from req,body
     const {post,user}=req.body;
     //create a comment object:
     const like=new Like({post,user});

     //save the new comment object into the database:
     const savedLike=await like.save();

     //find the post by ID and add the new comment to its comments array:
     const updatedPost=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true}).populate("likes").exec();
     
     
     res.status(200).json(
        {
            post:updatedPost,
        }
     )
    }
    catch(error)
    {
       return res.status(500).json({
        message:"Error in comment Controller"
       })
    }
}



export const  UnLike=async(req,res)=>
    {
        try
        {
         const {post,like}=req.body;
         //finding and delete the like collection
         const deletedLike=await Like.findOneAndDelete({post:post,_id:like});

         //update the post collection:
         const updatedPost=await Post.findByIdAndDelete(post,{$pull:{likes:deletedLike._id}},{new:true});

        res.json({
            post:updatedPost
        })
        }
        catch(error)
        {
           return res.status(500).json({
            message:"Error in comment Controller"
           })
        }
    }