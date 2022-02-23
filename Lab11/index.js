//https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server

const express = require("express");
const http = require("http");
const path = require("path");
const fs = require("fs");
var cors = require("cors");
const app = express();
// const server = http.createServer(app);
var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "joshuastalin7",
  database: "staffms2",
});
connection.connect((err) => {
  if (err) {
    console.log("DB Connection Failed.");
    return;
  }

  // Initializing Exprress Server
  const app = express();
  app.use(cors());
  app.use("*", (req, res, next) => {
    console.log(req);
    next();
  });
  app.get("/getdata", (req, res) => {
    fs.readFile("./employee.json", "utf8", (err, jsonString) => {
      if (err) {
        console.log("File read failed:", err);
        return;
      }
      try {
        res.json({ employees: jsonString });
      } catch (err) {
        console.log("error parsing JSON", err);
      }
    });
  });

  app.get("/schools", function (req, res) {
    connection.query("select * from School", function (err, results, fields) {
      if (err) res.json(err);
      else {
        return res.json(results);
      }
    });
  });
  app.get("/school", function (req, res) {
    connection.query(
      "select * from School where SchoolID=" + req.query.id,
      function (err, results, fields) {
        if (err) res.json(err);
        else {
          return res.json(results);
        }
      }
    );
  });
  app.get("/addschool", function (req, res) {
    connection.query(
      `insert into School values(${req.query.id}, '${req.query.name}','${req.query.loc}')`,
      function (err, results, fields) {
        if (err) res.json(err);
        else {
          return res.json(results);
        }
      }
    );
  });
  app.get("/updateschool", function (req, res) {
    connection.query(
      `update School set name = '${req.query.name}' where SchoolID=${req.query.id}`,
      function (err, results, fields) {
        if (err) res.json(err);
        else {
          return res.json(results);
        }
      }
    );
  });
  app.get("/deleteschool", function (req, res) {
    connection.query(
      `delete from School where SchoolID = ${req.query.id}`,
      function (err, results, fields) {
        if (err) res.json(err);
        else {
          return res.json(results);
        }
      }
    );
  });

  app.listen(3000, function () {
    console.log("server is listening on port: 3000");
  });
});

//localhost:port/api?keyparameter=keyvalue&kp1=kv2

//add school
//localhost:3000/addschool?name=christ_kengeri&id=2&loc=kengeri

//delet
//http://localhost:3000/deleteschool?id=2

//http://localhost:3000/updateschool?name=christ_kengeri_updated&id=2&loc=kengeri