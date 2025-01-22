import Todo from "../models/Todo.js";
const updateTodo=async(req,res)=>
{
 try
 {
   const {id}=req.params;
   const {title,description}=req.body;

   const todo=await Todo.findByIdAndUpdate(
    {_id:id},
    {title,description,updatedAt:Date.now()}
   )

   res.status(200).json(
    {
        success:true,
        data:todo,
        message:"Update Successfully"
    }
   )
 }
 catch(error)
 {
    res.status(500).json(
        {
            success:false,
            data:"Internal Server Error",
            message:error.message
        }
       )
 }
}

export default updateTodo;