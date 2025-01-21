import mongoose from "mongoose";

const TodoSchema=new mongoose.Schema(
    {
        title:
        {
            type:"String",
            required:true,
            maxLength:50
        },

        description:
        {
            type:String,
            required:true,
            maxLength:500
        },

        createdAt:
        {
            type:Date,
            default:Date.now(),
            required:true
        },

        updatedAt:
        {
            type:Date,
            default:Date.now(),
            required:true
        }
    }
)


const Todo=mongoose.model('todo',TodoSchema);

export default Todo;