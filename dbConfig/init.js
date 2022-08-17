const { Pool } = require("pg");

const pool = new Pool();
/*
pool.query('INSERT INTO users(name,email,password) VALUES("admin","admin@gmail.com","password")', (err, res) => {
    if (err) {
      throw err
    }
    console.log('added admin:', res.rows[0])
  })
*/

module.exports = pool;