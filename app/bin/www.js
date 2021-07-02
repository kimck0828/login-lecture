"use strick";
const reqlib = require("app-root-path").require;

const logger = reqlib("/src/config/logger");
const app = reqlib("/app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`${PORT} サーバ起動しました。`);
});
