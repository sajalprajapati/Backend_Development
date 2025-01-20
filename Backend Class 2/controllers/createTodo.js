import Todo from "../models/Todo.js";

//define route handler....
const createTodo=async(req,res)=>
{
 try
 {
   //Step1: extract title and description from the request body
   const {title,description}=req.body;
    //Step 2: create a new Todo Obj and insert in DB...
    const response=await Todo.create ({title,description});
    // Step 3: send a json response with a success flag
    res.status(200).json
    (
        {
            success:true,
            data:response,
            message:'Entry Created Successfully'
        }
    ) 
 }

 catch(err)
 {
   console.log(err);
   console.error(err);
   res.statu(500),json({
    success:false,
    data:"internal error",
    message:'Entry Not Successfully'
})
 }
}

export default createTodo;