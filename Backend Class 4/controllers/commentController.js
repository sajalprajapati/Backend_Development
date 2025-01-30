import Comment from '../models/commentModel.js';
import Post from "../models/postModel.js";

//business logic:
export const  createComment=async(req,res)=>
{
    try
    {
     //pehle object create karna from req,body
     const {post,user,body}=req.body;
     //create a comment object:
     const comment=new Comment({post,user,body});

     //save the new comment object into the database:
     const savedComment=await comment.save();

     //find the post by ID and add the new comment to its comments array:
     const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true}).populate("comments").exec();
     
     
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

