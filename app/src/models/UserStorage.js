"use strict";
const db = require("../config/db");
const util = require("util");

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      db.query("select * from users where id=?", [id], (err, rows, fields) => {
        if (err) {
          reject(`${err}`);
          return;
        }
        if (rows.length > 0) {
          resolve(rows[0]);
        } else {
          resolve({});
        }
        return;
      });
    });
  }

  static async save(req) {
    const { id } = await this.getUserInfo(req.id);
    console.log(id);
    if (id) {
      throw "存在するID";
    }

    return new Promise((resolve, reject) => {
      db.query(
        "insert into users(id, psword, name) values (?,?,?)",
        [req.id, req.psword, req.name],
        (err) => {
          if (err) {
            reject(`${err}`);
          }
          resolve({ success: true });
        }
      );
    });
  }
}

module.exports = UserStorage;
