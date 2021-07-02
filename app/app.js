"use strict";

const rootDir = require("app-root-path");
const reqlib = rootDir.require;

const express = require("express");
const app = express();

// config
require("dotenv").config();

// WEB set
app.set("views", `${rootDir}/src/views`);
app.set("view engine", "ejs");

// static
app.use(express.static(`${rootDir}/src/public`));
// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routing
app.use("/", require(`${rootDir}/src/routes/home/router`));

module.exports = app;
