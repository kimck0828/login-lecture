"use strict";

const reqlib = require("app-root-path").require;
const UserStorage = reqlib("/src/models/UserStorage");
const User = reqlib("/src/models/User");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: async (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    const user = new User(req.body);
    return res.json(await user.login());
  },

  register: async (req, res) => {
    const id = req.body.id,
      psword = req.body.psword,
      confirmPsword = req.body.confirmPsword,
      name = req.body.name;

    const user = new User(req.body);
    return res.json(await user.register());
  },
};

module.exports = { output, process };
