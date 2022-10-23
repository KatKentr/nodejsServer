//creates routes for fibonacci

//import the epress application object
import express from 'express';
import {fibonacci} from './fibonacci_func.js'

//get the Router object
const router=express.Router();


router.get("/fibonacci10",function(req,res){

   res.send(`The 10th fibonacci term is: ${fibonacci(10)}`);


});


router.get("/fibonacci20",function(req,res){

   res.send(`The 20th fibonacci term is: ${fibonacci(20)}`);


});


router.get("/fibonacci30",function(req,res){

   res.send(`The 30th fibonacci term is: ${fibonacci(30)}`);


});

export { router };






 
