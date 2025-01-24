//learning how to connect models:
import mongoose from "mongoose";

const postSchema=new mongoose.Schema
(
 {
    title:
    {
        type:String,
        required:true
    },
    body:
    {
        type:String,
        required:true,
        maxLength:500
    },
    likes:
    [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like"
        }
    ],
    comments:
    [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]

 }
)

export default mongoose.model("Post",postSchema);