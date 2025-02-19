import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './config/testing.js'
const app=express();
dotenv.config();
const port=process.env.PORT;
app.listen(port,()=>{
    dbConnect();
    console.log(`Server is running at the port number ${port}`);
})
