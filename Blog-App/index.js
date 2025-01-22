import express from 'express'
import dotenv from 'dotenv';
import dbConnect from './config/dbConnect.js';
import blog from "./routes/blog.js"
dotenv.config();
const app=express();

//middleware.
app.use(express.json());
app.use('/api/v1',blog);
const port=process.env.PORT;

app.listen(port,()=>{
    dbConnect();
    console.log(`Server is initiated at the port number ${port}`);
})

app.get('/',(req,res)=>{res.send(`<h1>This is my homepage</h1>`)})