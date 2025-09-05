const express =require('express'); //import Express
const app=express();  //create an Express application object called app

app.use(express.json());  //t tells Express to automatically parse incoming JSON data from the request body. 
app.use(express.urlencoded({extended: true}));  //It parses data sent through HTML forms (form submissions).
//extended: true means it can handle nested objects inside the form data.

app.get("/",function(req, res){ //This defines a GET route for / (the homepage).
    res.send("welcome to this world");
});

app.get("/about",function(req,res){
    res.send("this is about page");
});