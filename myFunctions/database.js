//database connection file

import mysql from 'mysql';

const pool = mysql.createPool({
  connectionLimit: 498,
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: '1234_Ken',      // Replace with your database password
  database: 'fruits' // // Replace with your database Name
  
});
/*
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
*/

export { pool };
