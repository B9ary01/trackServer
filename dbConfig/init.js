const { Pool } = require("pg");



const pool = new Pool({
    user: 'dfcohocmhpzmmf',
    host: 'ec2-34-252-216-149.eu-west-1.compute.amazonaws.com',
    database: 'dccrt91mtusg2s',
    password: 'password',
    port: 5432,
  })


   pool.query(`SELECT * FROM users;`, (err, res) => {
    if (err) {
        console.log("Error - Failed to select all from Users");
        console.log(err);
    }
    else{
        console.log(res.rows);
    }
    pool.end()
});

pool.query(`INSERT INTO users(name,email,password)VALUES($1,$2,$3)`, ['name','email','password'], (err, res) => {
    if (err) {
        console.log("Error - Failed to insert data into Users");
        console.log(err);
    }
});

module.exports = pool;
