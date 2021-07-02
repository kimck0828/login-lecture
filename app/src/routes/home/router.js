"use strict";

const router = require("express").Router();
const reqlib = require("app-root-path").require;

// controller
const ctrl = reqlib("/src/routes/home/home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;
