const express = require("express");
// require('dotenv').config();

const bodyParser = require('body-parser');
const db = require("./config/database");
const router = require("./routes/router");



const app= express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(router);


app.listen(port, (err) =>{
    if(err){
        console.log("Error in connecting server: ${err}");
    }else{
    console.log("Server is up and running");
    }
});