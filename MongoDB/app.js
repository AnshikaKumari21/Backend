const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/',(req, res) => {
    res.send("hey");
})

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "Anu",
        email: "anu120@gmail.com",
        username: "anuu"
    })
    res.send(createduser);
})

app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({username: "anshika"}, {name: "Anshika gupta"}, {new: true})
    res.send(updateduser);
})

app.get("/read", async (req, res) => {
    let users = await userModel.find() //find() return in array form,  findOne() returns in object form, or if we want only one user we can write findOne({username:"anshika"})
    res.send(users);
})

app.get("/delete", async (req, res) => {
    let users = await userModel.findOneAndDelete({username:"anuu"}); 
    res.send(users);
})
app.listen(3000);