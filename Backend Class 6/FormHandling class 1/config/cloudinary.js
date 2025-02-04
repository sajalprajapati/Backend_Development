

import { v2 as cloudinary } from 'cloudinary';
import { configDotenv } from 'dotenv';

configDotenv();

export const cloudinaryConnect = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET
        });
        console.log("Cloudinary connected successfully");
    } catch (error) {
        console.log('Error in Cloudinary configuration...');
        console.error(error.message);
    }
};