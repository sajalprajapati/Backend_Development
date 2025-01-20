import { createTodo } from "../controllers/createTodo.js";
import express from 'express';

// Creating an instance of express Router
const router = express.Router();

// Defining API routes
router.post("/createTodo", createTodo);

// Exporting the router
export default router;


/*
The difference between Router and router in Express is based on capitalization and their usage in the code. Let me explain both:

1. Router (Capital 'R'):
Router is a class in Express.
It's used to create a new Router instance. When you use express.Router(), you're calling this class to create a new router object.
Usage:
import express from 'express';
const Router = express.Router; // Class used to create a router instance
2. router (Lowercase 'r'):
router is a variable name that holds the instance of the router you create using express.Router().
Usage:
const router = express.Router(); // Creating a new router instance
Example with Both:
import express from 'express';

// Create a router instance using the Router class
const Router = express.Router;

// Create a router instance (object) to use in your code
const router = Router(); // Now you can use `router` to define routes
In summary:
express.Router() is used to create a new router instance.
router (the variable name) is the instance that contains all the routes and middleware logic for that specific router.
*/