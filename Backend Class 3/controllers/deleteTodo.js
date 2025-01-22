import Todo from "../models/Todo.js"
export const deleteTodo=async(req,res)=>
{
    try
    {
      const {id}=req.params;
      const answer=await Todo.findByIdAndDelete(
        id
      )


      res.status(200).json({
        success:true,
        message:"Todo Deleted"
      })
    }

    catch(error)
    {
        res.status(500).json({
            success:false,
            message:error.message
          })
    }
}




