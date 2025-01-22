import mongoose from "mongoose";
const blogSchema=new mongoose.Schema(
    {
        title:
        {
            type:String,
            required:true,
            maxLength:50,
            trim:true
        },

        category:
        {
            type:String,
            required:true,
            maxLength:20
        },
        content:
        {
            type:String,
            required:true,
            maxLength:500
        },
        author:
        {
          type:mongoose.Schema.Types.ObjectId,
          ref:'User',
          required:true
        },
        createdAt:
        {
            type:Date,
            default:Date.now,
            required:true
        },
        updatedAt:
        {
            type:Date,
            default:Date.now,
            required:true
        },
        
        likes:
        {
            type:Number,
            default:0,
        },

        unlikes:
        {
            type:Number,
            default:0
        },
        comments:
        [
            {
            user:{type:String,maxLength:30},
            text:{type:String,maxLength:400},
            date:{type:Date,default:Date.now}
            }
        ],
    }
)

const BLOG=mongoose.model("blog",blogSchema);

export default BLOG;