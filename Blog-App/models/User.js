import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
        unique:true,
        trim:true,
        maxLength:50
    },

    email:
    {
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    }
})


const USER=mongoose.model("user",userSchema);
export default USER;