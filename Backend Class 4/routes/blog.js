import express from 'express'
import { createComment } from '../controllers/commentController.js';
// import { createLike } from '../controllers/likeController.js';
import { createPost ,getAllPosts} from '../controllers/postController.js';
import { Liked ,UnLike} from '../controllers/likeController.js';
const router=express.Router();


//mapping is being done here:
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",Liked);
router.post("/likes/unlike",UnLike)

export default router;