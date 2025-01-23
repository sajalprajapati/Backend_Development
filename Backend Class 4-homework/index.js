import express from 'express'
import { configDotenv } from 'dotenv';
import databaseConnection from './config/dbConnect.js';
import router from './routes/routes.js';
configDotenv();
const app=express();
const port =process.env.PORT ||3000
app.listen(port,()=>{
    databaseConnection();
    console.log(`Server is running at the port number ${port}`);
})



app.use(express.json());
app.use('/api/v2',router);

app.get('/',(req,res)=>{
    
    res.send(`<h1>Hello Baby !Welcome to Server Page Yo!</h1>
        <h1>Database Connection has been established</h1>`)
})