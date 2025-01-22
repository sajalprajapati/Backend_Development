import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();
const dbConnect=async(req,res) =>
{
    try
    {
      await mongoose.connect(process.env.DATABASE_URL);
      console.log(`Database Connection Successful!`);
      process.exit(0);
    }

    catch(error)
    {
      console.log("DB connection unsuccessful");
      console.error(error.message);
      process.exit(2);
    }
}

export default dbConnect;