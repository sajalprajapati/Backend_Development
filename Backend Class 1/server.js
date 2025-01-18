
//Server Initiated:


// Server Initiated:
import bodyParser from 'body-parser'; // <<<----- Step 1: to install middleware....
import express from 'express';
import mongoose from 'mongoose';
const app = express();

// Now we are using the concept of middleware:
app.use(bodyParser.json()); // Specifically parse JSON data and add it to the request.body object

// Pehla route bana rhe hai...
app.get('/', (request, response) => {
  response.send("Hello Ji! Kaise Hai Saare");
});

app.post('/api/cars', (request, response) => {
  const { name, brand } = request.body;
  console.log(name);
  console.log(brand);
  response.send("Car Submitted Successfully");
});

// Activate the server on 3000 port
app.listen(3000, () => {
  console.log("Server Chal gya hai bhai at 3000");
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/') //<-----here is the mistakeee ..i think it is disconnected
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log(error.message);
  });


/*
Import the body-parser library:
This brings in the functionality needed to handle and parse the body of incoming HTTP requests.
Tell Express to use the middleware:
Using app.use(bodyParser.json()), you instruct Express to apply the body-parser middleware to every incoming request.
What does body-parser do?:
When a request comes in, body-parser checks if the request has a JSON body (by looking at the Content-Type header).
If it does, body-parser takes that JSON data, parses it into a JavaScript object, and attaches it to the request.body object.
This parsed object is then available to your route handlers (like in app.post('/api/cars')) to be used directly.

*/


