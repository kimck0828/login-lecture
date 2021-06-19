"use strict";

const express = require("express");
const app = express();

// routing
app.use("/", require("./routes/home/router"));

// WEB set
app.set("views", "./views");
app.set("view engine", "ejs");

module.exports = app;
