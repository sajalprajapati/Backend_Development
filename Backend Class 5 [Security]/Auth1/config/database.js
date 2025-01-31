import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

const dbConnect=async()=>
{
    try
    {
      mongoose.connect(process.env.DATABASE_URL);
      console.log("Database Connection Successful");
    //   process.exit(0);
    }

    catch(error)
    {
     console.log("Erro aa gya hai bhai");
     console.error(error.message);
     process.exit(1);
    }
}


export default dbConnect;