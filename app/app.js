"use strict";

const express = require("express");
const app = express();

// routing
app.use("/", require("./src/routes/home/router"));

// WEB set
app.set("views", "./src/views");
app.set("view engine", "ejs");

module.exports = app;
