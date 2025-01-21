import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const dbConnect=async() =>
{
    await mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("DB connection successful ho gya!")})
    .catch((error)=>
         { 
          console.log("Bhai DB main Error A gya hai");
          console.error(error.message);
          process.exit(1);
         })
}

export default dbConnect;