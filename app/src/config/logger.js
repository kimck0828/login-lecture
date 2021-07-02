const rootDir = require("app-root-path");

const { createLogger, transports, format } = require("winston");
const { combine, colorize, timestamp, printf } = format;

const printLogFormat = {
  file: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level} : ${message}`;
    })
  ),
  console: combine(
    colorize(),
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level} : ${message}`;
    })
  ),
};

const printLogConsole = combine(
  colorize(),
  timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),
  printf(({ timestamp, level, message }) => {
    return `${timestamp} ${level} : ${message}`;
  })
);
const printLogFile = combine(
  timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),
  printf(({ timestamp, level, message }) => {
    return `${timestamp} ${level} : ${message}`;
  })
);

const opts = {
  file: new transports.File({
    filename: `${rootDir}/src/logs/logfile.log`,
    level: "info",
    format: printLogFormat.file,
  }),
  console: new transports.Console({
    level: "info",
    format: printLogFormat.console,
  }),
};

const logger = createLogger({
  transports: [opts.file],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(opts.console);
}

module.exports = logger;
