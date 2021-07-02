"use strick";
const reqlib = require("app-root-path").require;

const app = reqlib("/app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("サーバ起動しました。");
});
