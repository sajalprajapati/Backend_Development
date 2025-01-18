
//Server Initiated:


import bodyParser from 'body-parser'; //<<<-----Step 1:to install middleware....
import express, { request, respond } from 'express'; 
const app=express();


//now we are using the concept of middleware:
app.use(bodyParser.json()); //specifically parse JSON data and add it to the reuqest.body object


//pehla route bana rhe hai...
app.get('/',(request ,respond)=>{respond.send("Hello Ji! Kaise Hai Saare")});
app.post
('/api/cars',(request,respond)=>
 {
   const {name,brand}=request.body;
   console.log(name);
   console.log(brand);
   respond.send("Car Submitted Successfully");
 }
)





//activate the server on 3000 port 
app.listen(3000,() =>{console.log("Server Chal gya hai bhai at 3000")});







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


