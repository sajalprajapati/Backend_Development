import mongoose from "mongoose";
const blogSchema=new mongoose.Schema({
    title:
    {
        type:String,
        required:true,
        maxLength:50
    },

    category:
    {
        type:String,
        required:true,
        maxLength:50
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
    
    likes:
    {
        type:Number,
        default:0
    },
    unlikes:
    {
        type:Number,
        default:0
    },

    comments:[
        {
            user:
            {
                type:String,
                maxLength:50
            },
            
            text:
            {
                type:String,
                maxLength:500
            },
            
            date:
            {
                type:Date,
                default:Date.now
            }

        }
    ]
},{timestamps:true});

const BLOG=mongoose.model('blog',blogSchema);
export default BLOG;