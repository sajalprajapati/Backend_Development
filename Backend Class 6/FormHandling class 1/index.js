import express from 'express'
import { dbConnect } from './config/database.js'
import { configDotenv } from 'dotenv'
import fileUpload from 'express-fileupload'; //this is used for handling file with express.
import { cloudinaryConnect } from './config/cloudinary.js';
import Upload from "./routes/FileUpload.js";




const app=express();
configDotenv();

const port=process.env.PORT || 3000;





//adding middleware...
app.use(express.json());

//handling file-uploading  with middleware....
app.use(fileUpload()); //this will upload the server 


//handling media server initiation...
cloudinaryConnect();






//mouting the routes...
app.use('/api/v2/upload',Upload);




app.listen(port,()=>{
    dbConnect();
    console.log(`The server is running at the port number `+ port);
})