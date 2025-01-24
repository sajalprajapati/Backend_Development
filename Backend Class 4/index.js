import express from 'express'
import { configDotenv } from 'dotenv'
import dbConnect from './config/database.js';
import blog from './routes/blog.js'
configDotenv();
const app=express();
const port=process.env.PORT||5001;

//using middleware:
app.use(express.json());
//mounting 
app.use('/api/v2',blog);




app.listen(port,()=>{
    // dbConnect();
    console.log(`Server is running at the port number ${port}`);
})



app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to Home Page Baby!</h1>`)
})
