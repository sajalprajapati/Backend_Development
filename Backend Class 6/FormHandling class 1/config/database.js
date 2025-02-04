import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

export const dbConnect=async()=>
{
    try
    {
      await mongoose.connect(process.env.MONGODB_DATABASE_URL);
      console.log(`The database connection is successful`);
    }
    catch(error)
    {
        console.log(`Error in the database connection`);
        console.error(error.message);
        process.exit(1);
    }
}