import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';
dotenv.config();
const app=express();

const PORT=process.env.PORT||3001;

dbConnect();
app.listen(PORT,()=>{console.log(`Server is running at the port number ${PORT}`)});

