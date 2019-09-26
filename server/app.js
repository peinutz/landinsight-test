const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/hello/", async (req, res) => {
    res.status(200).json("hello")
  });


module.exports = app;