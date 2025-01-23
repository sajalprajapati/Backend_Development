import express from 'express'
import { createPost, createUser } from '../controllers/createPostAndUser.js';
import { getAllthePost,getAlltheUserPost } from '../controllers/getPostAndUser.js';
const router=express.Router();
router.post('/posts/create',createPost);
router.post('/users/create',createUser);
router.get('/posts/all',getAllthePost);
router.get('/posts/:id',getAlltheUserPost);
router.put('/posts/likes/like',);
router.put('/posts/unlikes/unlike',)
export default router;