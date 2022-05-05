const express = require("express");
const path = require("path");
// let's create express app

const app = express();

// use some application-level middlewares

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(function AllowSelf(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization, Accept"
  );
  next();
});

// load router

const router = require("./router");

app.use(router);

// ready to export
module.exports = app;
