import express from 'express';
import {localFileUpload} from '../controllers/fileUpload.js';
const router=express.Router();


//api route defining..
//learning how to store the local file in our database and on our server...
router.post("/localfileUpload",localFileUpload);

export default router;