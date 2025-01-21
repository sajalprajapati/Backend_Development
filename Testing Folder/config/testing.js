import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const uri=process.env.DATABASE_URL;
const dbConnect=async()=>
{
    try
    {
     await mongoose.connect(uri);
     console.log("DB connection successful ho gya hai bhai !.....😊");
    }

    catch(error)
    {
      console.log("Bhai dekh db main problem aayi hai direct link rkhe de uske uper");
      console.error(error.message);
      process.exit(1);
    }
}

export default dbConnect;