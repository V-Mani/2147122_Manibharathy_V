const express = require("express");
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '127.0.0.1:3306',
  user     : 'root',
  password : '123abc',
  database : 'mall_management'
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
});

app.get("/",(req,res) => {
    connection.query('SELECT * from mall', (err, rows) => {
        if(err) throw err;
        console.log('The data from users table are: \n', rows);
        connection.end();
    });
});

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});