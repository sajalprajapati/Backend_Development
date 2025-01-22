import express from 'express'
import {createPost,createUser} from '../controllers/createPost.js';

const router=express.Router();

router.post('/posts/create',createPost)
router.post('/users/create',createUser);

export default router;