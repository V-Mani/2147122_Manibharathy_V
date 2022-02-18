//https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server

const express = require('express')
const http = require('http');
const path = require("path");
const fs = require("fs");
var cors = require('cors')
const app = express()
const server = http.createServer(app);
app.use(cors())









app.get('/getdata', (req, res) => {
  fs.readFile("./employee.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    try{
        res.json({employees : jsonString})
        
    }catch (err) {
        console.log('error parsing JSON',err)
    }
  });
});

server.listen(3000, function(){
  console.log("server is listening on port: 3000");
});