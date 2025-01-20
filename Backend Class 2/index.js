import express from 'express'
import todoRoutes from './routes/todos.js';
import dotenv from 'dotenv';
import dbConnect from './config/database.js'
dotenv.config();


const app=express();


//middleware to parse json request body......
app.use(express.json()); //<--it is same like body-parser....


//adding the version ....
app.use("/api/v1",todoRoutes);



app.listen(process.env.PORT ,()=>
  {
    console.log(`the server is running successful at ${process.env.PORT}!!`);
  }
)

//connect to the database.....
dbConnect();


//default Route
app.get("/",(req,res) =>{
  res.send(`<h1>This is Home Page</h1>`);
})