const { Pool } = require("pg");


const pool = new Pool({
    connectionString: "postgres://ouywwgecfyrfqb:8c9fd98165cb77f324463708470bec67940add9bb0e334273d3530bdde7831fa@ec2-54-246-185-161.eu-west-1.compute.amazonaws.com:5432/det5drs2ifh548",
    ssl: {
    rejectUnauthorized: false
    }
   });



   pool.query(`SELECT * FROM users;`, (err, res) => {
    if (err) {
        console.log("Error - Failed to select all from Users");
        console.log(err);
    }
    else{
        console.log(res.rows);
    }
});

pool.query(`INSERT INTO users(name,email,password)VALUES($1,$2,$3)`, ['name','email','password'], (err, res) => {
    if (err) {
        console.log("Error - Failed to insert data into Users");
        console.log(err);
    }
});
Footer


module.exports = pool;