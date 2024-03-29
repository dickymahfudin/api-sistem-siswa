require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_CONNECTION, TZ } =
  process.env;

const username = DB_USER;
const password = DB_PASSWORD;
const database = DB_NAME;
const host = DB_HOST;
const dialect = DB_CONNECTION;

module.exports = {
  development: { username, password, database, host, dialect },
  test: { username, password, database, host, dialect },
  production: {
    username,
    password,
    database,
    host,
    dialect,
    logging: false,
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
