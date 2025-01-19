import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
//jab main dotenv.config likhunga tab aisa hoga ki
//jo kuch maine .env main likha hai as a object woh aa
//jayega process object main


const dbConnect=() =>
{
    mongoose.connect(process.env.DATABASE_URL) //it is promise
    .then(()=>console.log("DB ka connection is successful"))
    .catch
    ((error)=>
        {
         console.log("issue in DB connection");
         console.log(error.message);
         process.exit(1);
        }
    )
}


export default dbConnect;


/*
application) and provide an exit code to the operating system.

Meaning of process.exit(1):
process: Refers to the global object in Node.js that provides information about and control over the current Node.js process.
exit(1):
The 1 is the exit code that indicates the process ended with an error.
By convention:
0: Indicates successful execution (no errors).
Non-zero values (e.g., 1, 2, etc.): Indicate errors or abnormal termination.
*/