import express from 'express'
import dotenv from "dotenv"
// import dbConnect from './config/database';
const app=express();
dotenv.config();


app.listen
(process.env.PORT,()=>
  {
    console.log("Server chal gya bhai! Tension na le....!");
  }
)