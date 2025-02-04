//establishing the connection with cloudinary.com

import { v2 as cloudinary } from 'cloudinary';
import { configDotenv } from 'dotenv';
configDotenv();

export const cloudinaryConnect=()=>
{
    try
    {
        cloudinary.config
        ({ 
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret:process.env.CLOUDINARY_API_SECRET
         });
    }

    catch(error)
    {
      console.log('error in cloudinary...');
      console.error(error.message);
    }
}