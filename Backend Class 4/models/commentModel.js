//learning how to connect models:
import mongoose from "mongoose";

const commentSchema=new mongoose.Schema
(
 {
    post:
    {
        //kis post pe comment kiya hai 
        type:mongoose.Schema.Types.ObjectId, //id ko store kar rha hoga
        ref:"Post" ,//reference to Post model,
    },

    user:
    {
        //kisne kiya hai 
        type:String,
        required:true
    },
    body:
    {
        //kya kiya hai....
        type:String,
        required:true
    }
 }
);

export default mongoose.model('Comment',commentSchema);