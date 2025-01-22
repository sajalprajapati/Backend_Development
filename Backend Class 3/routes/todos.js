import express from 'express'
import {createTodo} from '../controllers/createTodo.js'
import { getTodo,getTodoById } from '../controllers/getTodo.js';
import  updateTodo from "../controllers/updateTodo.js"
import { deleteTodo } from '../controllers/deleteTodo.js';
const router=express.Router();

router.post('/createTodo',createTodo);
router.get('/getTodos',getTodo);
router.get('/getTodos/:id',getTodoById)
router.put('/updateTodo/:id',updateTodo);
router.delete('/delete/:id',deleteTodo);

export default router;