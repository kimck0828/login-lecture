"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const { id, psword } = UserStorage.getUserInfo(this.body.id);
    if (id) {
      if (id === this.body.id && psword === this.body.psword) {
        return { success: true };
      } else {
        return { success: false, msg: "パスワードが一致しない" };
      }
    } else {
      return { success: false, msg: "存在しないID" };
    }
  }

  register() {
    try {
      const res = UserStorage.save(this.body);
      return res;
    } catch (e) {
      return { success: false, msg: e };
    }
  }
}

module.exports = User;
