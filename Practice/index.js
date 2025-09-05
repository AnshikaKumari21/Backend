const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));//with this we can attach all the photos, videos and all

app.get('/', function(req, res){
    res.render("index");
})

app.listen(3000);