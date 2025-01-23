import express from 'express'
import { configDotenv } from 'dotenv'
configDotenv();
const app=express();
app.listen(3000,()=>{
    console.log("App is running successfully");
})

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to Home Page Baby!</h1>`)
})