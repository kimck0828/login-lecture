const mysql = require("mysql");

const db = mysql.createConnection({
  host: "kimck-login-lecture.ciwvcgd8c6yp.ap-northeast-1.rds.amazonaws.com",
  user: "admin",
  password: "sinae1101",
  database: "login_lecture",
});

db.connect();

module.exports = db;
