import {fibonacci} from './myFunctions/fibonacci_func.js'

//treats as a commonJS script
//const express = require("express");
import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //res.send("Hello World from node server!");
    res.send(`The 10th fibonacci term is: ${fibonacci(10)}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
