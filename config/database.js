const { username, password, database, host } = require("./index").db;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
  },
  // test: {
  //   username,
  //   password,
  //   database: `${database}_test`,
  //   host,
  //   dialect: 'postgres',
  // },
};
