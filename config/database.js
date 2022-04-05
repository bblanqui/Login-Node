require("dotenv").config()

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'Login',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'mysql',
  },
  // config  seeds
  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  // config migrations
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",
}
