"use strict";
const fs = require("fs");

class UserStorage {
  static #users = {
    id: ["user1", "user2", "user3"],
    psword: ["pw1", "pw2", "pw3"],
    name: ["ユーザ１", "ユーザ2", "ユーザ3"],
  };

  static getUsers(...fields) {
    const newUsers = fields.reduce((data, field) => {
      console.log(`data:${data}, filed:${field}`);
      if (this.#users.hasOwnProperty(field)) {
        data[field] = this.#users[field];
      }
      return data;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.getUserFile();
    const index = users.id.indexOf(id);
    const fields = Object.keys(users);
    return fields.reduce((data, field) => {
      data[field] = users[field][index];
      return data;
    }, {});
  }

  static save(req) {
    const users = this.getUserFile();
    if (users.id.includes(req.id)) {
      throw "存在するID";
    }
    users.id.push(req.id);
    users.psword.push(req.psword);
    users.name.push(req.name);
    this.writeUserInfo(users);
    console.log(this.getUserFile());
    return { success: true };
  }

  static getUserFile() {
    let buff = null;
    try {
      buff = fs.readFileSync("./src/databases/users.json", "utf8");
    } catch (e) {
      console.log(">>>" + e.message);
      throw e;
    }
    return JSON.parse(buff);
  }

  static writeUserInfo(userInfoAll) {
    try {
      fs.writeFileSync(
        "./src/databases/users.json",
        JSON.stringify(userInfoAll, null, 1)
      );
    } catch (e) {
      console.log(">>>" + e.message);
      throw e;
    }
  }
}

module.exports = UserStorage;
