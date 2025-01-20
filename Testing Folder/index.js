import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './config/connection.js';
const app=express();
dotenv.config();
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    dbConnect();
    console.log(`the server is running at port number ${process.env.PORT} `);
})
