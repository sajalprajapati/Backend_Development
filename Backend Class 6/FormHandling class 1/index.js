import express from 'express'
import { dbConnect } from './config/database.js'
import { configDotenv } from 'dotenv'
const app=express();
configDotenv();

const port=process.env.PORT || 3000;


app.listen(port,()=>{
    dbConnect();
    console.log(`The server is running at the port number `+ port);
})