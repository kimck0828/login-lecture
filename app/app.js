"use strict";

const express = require("express");
const app = express();

require("dotenv").config();

// WEB set
app.set("views", "./src/views");
app.set("view engine", "ejs");

// static
app.use(express.static(`${__dirname}/src/public`));
// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routing
app.use("/", require("./src/routes/home/router"));

module.exports = app;
