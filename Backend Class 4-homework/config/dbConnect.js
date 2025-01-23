import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const databaseConnection=async()=>
{
    try
    {
     await mongoose.connect(process.env.DATABASE_URL);
     console.log("DataBASE connection successful");
    }

    catch(error)
    {
     console.log("Database main koi error hai check kar");
     console.error(error.message);
     process.exit(1);
    }
}

export default databaseConnection;