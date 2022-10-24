//creates routes for fibonacci

//import the epress application object and the connection to the database
import express from 'express';
//import {conn} from './database.js'
//import mysql from 'mysql';
import {pool} from './database.js';

//get the Router object
const router=express.Router();


router.get('/fetchData', function(req, res) {
    let sql='SELECT * FROM dummyData';
    
    
    /*
    const conn = mysql.createConnection({
      host: 'localhost', // Replace with your host name
      user: 'root',      // Replace with your database username
      password: '1234_Ken',      // Replace with your database password
      database: 'fruits' // // Replace with your database Name
   });
   */
   
    pool.query(sql, function (err, rows) {
     
     //conn.end();
     
     if (err) throw err;
     
     //first approach,returns the array. Content type:application/json
     //res.send(rows);
     
     //console.log("My SQL Connected via a new open connection.");
     //second approach: well formatted data. Content type: text/html
     
     res.setHeader("Content-type", "text/html");
     rows.map(iterable => {
    
     res.write(`id: ${iterable.id}, a: ${iterable.a}, b: ${iterable.b}, c: ${iterable.c}, d:${iterable.d}<br>`)
     });
     res.end()
     
     
  });
  
  //close connection
  //conn.end();
   // Close the connection.
   /*
    conn.end((err => {
        if(err) throw err;
        //console.log("Connection closed.");
    }));
    */
});




export { router };
