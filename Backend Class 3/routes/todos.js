import express from 'express'
import {createTodo} from '../controllers/createTodo.js'
import { getTodo,getTodoById } from '../controllers/getTodo.js';
const router=express.Router();

router.post('/createTodo',createTodo);
router.get('/getTodos',getTodo);
router.get('/getTodos/:id',getTodoById)

export default router;