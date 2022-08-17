const db = require('../dbConfig/init');

class User {

    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.password=data.password;
    }


    // get all users
    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const userData = await db.query('select * from users;')
                const users = userData.rows.map(u => new User(u))
                resolve(users);
                
            } catch (err) {
                reject("Error retrieving users")
            }
        })
    }

     //create a new user
     static create(name, email, password) {
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`INSERT INTO users (name,email, password) VALUES ($1, $2, $3) RETURNING *;`, [ name, email, password ]);
                let addUser = new User(postData.rows[0]);
                resolve (addUser);
            } catch (err) {
                reject('Error creating user');
            }
        });
    }

   /* static create(name){
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.query('INSERT INTO users (name) VALUES ($1) RETURNING *;', [ name ]);
                let user = new User(userData.rows[0]);
                resolve (user);
            } catch (err) {
                reject('user could not be created');
            };
        });
    };*/


    static findOrCreateByName(name){
        return new Promise (async (resolve, reject) => {
            try {
                let user;
                const userData = await db.query('SELECT * FROM users WHERE name = $1;', [ name ]);
                if(!userData.rows.length) {
                    user = await User.create(name);
                } else {
                    user = new User(userData.rows[0]);
                };
                resolve(user);
            } catch (err) {
                reject(err);
            };
        });
    };
   
}


module.exports=User;