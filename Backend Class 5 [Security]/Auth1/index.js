import express from 'express'
import dbConnect from './config/database.js';
import router from './routes/user.js';
import  cookieParser from "cookie-parser";
const app=express();

//route import and mount.
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1",router);



app.listen(4001,()=>{
    dbConnect();
    console.log(`Server is running at the port number ${4001}`)}
);



app.get('/',(req,res)=>{
    `<div><h1>Hello Baby ! Home Page is here! </h1></div>`
})