import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    email:
    {
        type:String,
        unique:true,
        required:true,
        trim:true
    },

    password:
    {
        type:String,
        required:true
    },
    role:
    {
        type:String,
        enum:["Admin","Student","Visitor"]
    }
})

const USER=mongoose.model("user",userSchema);
export default USER;