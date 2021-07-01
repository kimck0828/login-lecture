"use strict";

const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;
    console.log(`id:${id}, psword:${psword}`);

    const user = new User(req.body);
    return res.json(user.login());
  },

  register: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword,
      confirmPsword = req.body.confirmPsword,
      name = req.body.name;
    console.log(
      `id:${id}, psword:${psword}, confirmPsword:${confirmPsword}, name:${name}`
    );

    const user = new User(req.body);
    return res.json(user.register());
  },
};

module.exports = { output, process };
