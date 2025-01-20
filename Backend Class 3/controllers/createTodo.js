import Todo from "../models/Todo.js"
const createTodo=async(req,res)=>
{
    try
    {
      const {title,description}=req.body;
      const response=await Todo.create({title,description});
      res.status(200).json({
        success:true,
        data:response,
        message:"Submitted Successfully"
      })
    }

    catch(error)
    {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
          })
    }
}

export default createTodo;