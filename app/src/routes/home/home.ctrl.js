"use strict";

const users = {
  id: ["user1", "user2", "user3"],
  psword: ["pw1", "pw2", "pw3"],
};

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
    if (users.id.includes(id)) {
      if (users.psword[users.id.indexOf(id)] === psword) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "ログイン失敗",
    });
  },
};

module.exports = { output, process };
