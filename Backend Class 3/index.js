import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './config/database.js'
// import todoRoutes from './routes/todos.js'
const app=express();

dotenv.config();
const PORT=process.env.PORT ||3001;

//middleware
app.use(express.json());
//adding version:
// app.use('/api/v1',todoRoutes);

//starting the server:
app.listen(PORT,()=>{console.log(`Server is running at the port number ${PORT}`)});

dbConnect();

app.get('/',()=>{`<h1>This is homepage</h1>`});