import express from 'express'
import createTodo from '../controllers/createTodo.js'
const router=express.Router();

router.post('/createTodo',createTodo);

export default router;