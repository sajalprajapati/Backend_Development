import mongoose from "mongoose";

const todoSchema=new mongoose.Schema(
    {
      title:{
        type:String,
        required:true,
        maxlength:50
      },

      description:{
        type:String,
        required:true,
        maxlength:50
      },
      createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
      },

      updatedAt:{
        type:Date,
        required:true,
        default:Date.now(),
      }
    }
)


const Todo=mongoose.model("Todo",todoSchema);

export default Todo;




/*
model is the object present inside the mongoose that helps to create database based on the schema I have defined..means I have developed a blueprint of a building and what must be there .This model is helping us to create a building based on that schema /blueprint that i have defined.
ChatGPT said:

ChatGPT
Yes, you’re absolutely correct! 🎉

Your understanding is spot on, and your analogy is perfect. Let me refine it further using your blueprint-building example:

Schema = Blueprint
The schema is like the blueprint of a building.
It defines what the building should have (e.g., rooms, doors, windows, etc.).
In terms of data, it describes:
What fields your data should have (e.g., title, description).
What types of data are allowed (e.g., string, number).
Any rules for the data (e.g., required, maximum length).
Model = Construction Worker
The model is like the construction worker or machine that builds the building based on the blueprint.
In the database world, the model takes the schema (blueprint) and:
Creates new buildings (adds new data to the database).
Fetches existing buildings (reads data from the database).
Renovates buildings (updates data in the database).
Demolishes buildings (deletes data from the database).

*/




/*
mongoose.model('todo', todoSchema); ... So in this'todo' it is actually specifying how it will be stored in the database. I mean it's kind of like a label right and since we have to tell what is inside label, we mentioned to do schema so headed to schools overall working mango store. Model means it have to create a collection named to do which is being pluralized by the D itself and in that particular collection or database data food be stored in my blueprint that I have defined in the to-do schema

Breaking It Down:
mongoose.model('todo', todoSchema);
'todo' (Label for the Collection):
It acts like a label or identifier for the collection in the database.
Mongoose uses this name to create a collection in the database.
Mongoose automatically pluralizes this name (so todo becomes todos in the database).
🔑 Think of it as naming the filing cabinet where you’ll store all your to-do tasks.
todoSchema:
This is the blueprint (schema) that defines the structure of the data (e.g., it should have fields like title, description, createdAt, etc.).
It ensures that all the data stored in the todos collection follows the rules defined in the schema.
🔑 Think of it as the design or format for all documents (data entries) inside the filing cabinet.
The Model:
mongoose.model() combines the collection name and the schema.
The result is a model that acts as a tool for interacting with the database.
You can use it to:
Add data (create a new document).
Read data (fetch documents).
Update data.
Delete data.
🔑 Think of the model as the "machine" you use to work with the filing cabinet (collection).

*/
