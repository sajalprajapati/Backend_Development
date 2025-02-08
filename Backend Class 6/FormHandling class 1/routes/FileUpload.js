import express from 'express';
import {imageUpload, localFileUpload, videoUpload,imageSizeReducer} from '../controllers/fileUpload.js';
const router=express.Router();


//api route defining..
//learning how to store the local file in our database and on our server...
router.post("/localfileUpload",localFileUpload);

//learning how to store the image in cloudinary and creating its entry in the database...
router.post("/imageUpload",imageUpload);
router.post("/videoUpload",videoUpload)
router.post("/imageSizeReducer",imageSizeReducer);

export default router;