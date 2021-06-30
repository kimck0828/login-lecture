"use strict";

const router = require("express").Router();

// controller
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;
