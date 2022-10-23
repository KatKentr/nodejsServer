//import {fibonacci} from './myFunctions/fibonacci_func.js'
//import all the routes
import {router as fibonacci} from './myFunctions/fibonacci_route.js'
import {router as dbTest} from './myFunctions/fetchData_route.js'

//treats as a commonJS script
//const express = require("express");
import express from 'express';
const app = express();
const port = 4000;

/*
app.get("/", (req, res) => {
  //res.send("Hello World from node server!");
    res.send(`The 10th fibonacci term is: ${fibonacci(10)}`);
});
*/

app.use("/fibonacci", fibonacci);
app.use("/dbTest",dbTest);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
