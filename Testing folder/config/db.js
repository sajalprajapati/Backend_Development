import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const dbConnect=async() =>
{
  mongoose.connect(process.env.DATABASE_URL)
  .then(()=>{console.log("DB connection is successful")})
  .catch((error)=>{
    console.log("Bhai DB main problem aa gyi hai");
    console.error(error.message);
    process.exit(1);
  })
};

export default dbConnect;