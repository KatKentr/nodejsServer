//import {fibonacci} from './myFunctions/fibonacci_func.js'
//import all the routes
import {router as fibonacci} from './myFunctions/fibonacci_route.js'
import {router as dbTest} from './myFunctions/fetchData_route.js'
//treats as a commonJS script
//const express = require("express");
import express from 'express';

import cluster from 'node:cluster';
import { cpus } from 'node:os';
import process from 'node:process';

const numCPUs = cpus().length;



const port = 4000;


if (cluster.isPrimary) {
  //console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
  
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
  
} else {

  const app = express();
  //console.log(`Worker ${process.pid} started`);

  

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
 
 }
