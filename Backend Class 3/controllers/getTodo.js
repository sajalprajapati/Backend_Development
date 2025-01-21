// import mongoose from "mongoose"
import Todo from "../models/Todo.js"
export const getTodo=async(req,res)=>
{
    try
    {
      //fetching all the todo items from the database.
      const todos=await Todo.find({});
      res.status(200).json({
        success:true,
        data:todos,
        message:"Saare data apne fetch kar liya hai"
      })
    }
    catch(error)
    {
        res.status(500).json({
            success:false,
            data:error.message,
            message:"Server Error"
          })
    }
}


export const getTodoById =async(req,res)=>
{
    try
    {
      //extract items based on id,therefore we first fetch the id...
      const id=req.params.id;
      const answer=await Todo.findById({_id:id});

      //data for given id not found:
      if(!answer)
      {
        return res.status(404).json({
            success:false,
            message:"No Data Found with id"
        })
      }
      else{
      res.status(200).json({
        success:true,
        data:answer,
        message:`Todo ${id} data successfully fetched`
      })}
    }
    catch(error)
    {
        res.status(500).json({
            success:false,
            data:error.message,
            message:"internal server error...."
          })
    }
}