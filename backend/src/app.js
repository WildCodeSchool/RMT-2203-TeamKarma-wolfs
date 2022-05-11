const express = require("express");
const path = require("path");
// let's create express app

const app = express();

// use some application-level middlewares

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// load router

const router = require("./router");

app.use("/api", router);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// ready to export
module.exports = app;
