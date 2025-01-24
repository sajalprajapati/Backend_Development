import express from 'express'
import { createPost, createUser } from '../controllers/createPostAndUser.js';
import { getAllthePost,getAlltheUserPost } from '../controllers/getPostAndUser.js';
import { likeThePost, unlikeThePost } from '../controllers/updatingLikesAndUnlikes.js';
import { deleteAllthePosts, deleteAlltheUsers, deleteAsinglePosts, deleteAsingleUser } from '../controllers/deletingUserandPosts.js';
const router=express.Router();
router.post('/posts/create',createPost);
router.post('/users/create',createUser);
router.get('/posts/all',getAllthePost);
router.get('/posts/:id',getAlltheUserPost);
router.put('/posts/likes/like/:id',likeThePost);
router.put('/posts/unlikes/unlike/:id',unlikeThePost)
router.delete('/posts/delete',deleteAllthePosts)
router.delete('/posts/delete/:id',deleteAsinglePosts)
router.delete('/users/delete',deleteAlltheUsers)
router.delete('/users/delete/:id',deleteAsingleUser)

router.get
export default router;