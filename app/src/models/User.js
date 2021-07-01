"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const reqId = this.body.id;
    const reqPsword = this.body.psword;
    if (!reqId) {
      return { success: false, msg: "IDを入力して" };
    } else if (!reqPsword) {
      return { success: false, msg: "パスワードを入力して" };
    }

    const { id, psword } = UserStorage.getUserInfo(reqId);
    if (id) {
      if (id === reqId && psword === reqPsword) {
        return { success: true };
      } else {
        return { success: false, msg: "パスワードが一致しない" };
      }
    } else {
      return { success: false, msg: "存在しないID" };
    }
  }

  register() {
    const reqId = this.body.id;
    const reqPsword = this.body.psword;
    const confirmPsword = this.body.confirmPsword;
    const name = this.body.name;
    if (!reqId) {
      return { success: false, msg: "IDを入力して" };
    }
    if (!reqPsword) {
      return { success: false, msg: "パスワードを入力して" };
    }
    if (reqPsword != confirmPsword) {
      return { success: false, msg: "パスワードが一致しない" };
    }

    try {
      const res = UserStorage.save(this.body);
      return res;
    } catch (e) {
      return { success: false, msg: e };
    }
  }
}

module.exports = User;
