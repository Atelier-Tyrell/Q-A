require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USERNAME,
  database: process.env.DB_DATABASENAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT,
});

pool
  .connect()
  .then(() => console.log('Database is connected!'))
  .catch((err) => console.log('err', err));

module.exports = pool;
