//creates routes for fibonacci

//import the epress application object and the connection to the database
import express from 'express';
import {conn} from './database.js'

//get the Router object
const router=express.Router();


router.get('/fetchData', function(req, res) {
    let sql='SELECT * FROM dummyData';
    conn.query(sql, function (err, rows) {
     if (err) throw err;
     
     res.send(rows);
    
    /*
     for (let i = 0; i < rows.length; i++) {
       //this approach causes error. we cannot call send method twice (for each row)
       res.send(`a: ${rows[i].a}`);
      
     }
     */
  });
});


export { router };
