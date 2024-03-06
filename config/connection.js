//Cooper Griffin
//March 3rd 2024
//File that connects project to database. Checks for Heroku JAWSDB if not uses Local DB

const Sequelize = require('sequelize');
require('dotenv').config({ path: '.env.EXAMPLE' }); // Load environment variables from .env.EXAMPLE file

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
