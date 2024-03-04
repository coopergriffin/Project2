const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const fs = require('fs');

// Load environment variables from .env.example file
dotenv.config({ path: '.env.example' });

// Print loaded environment variables for debugging
console.log('Loaded environment variables:', process.env);

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
