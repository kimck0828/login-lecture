"use strict";

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
    const users = this.#users;
    const index = users.id.indexOf(id);
    const fields = Object.keys(users);
    return fields.reduce((data, field) => {
      data[field] = users[field][index];
      return data;
    }, {});
  }
}

module.exports = UserStorage;
