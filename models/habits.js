const db = require('../dbConfig/init');
const User=require('./users')
class Habit {

    constructor(data,user){
        this.id = data.id;
        this.habit = data.habit;
        this.frequency = data.frequency;
        this.streak=data.streak;
       // this.user_id = { name: data.name, path: `/users/${data.user_id}`};
       this.user_id =data.user_id;

    }


    // get all habits
    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const habitData = await db.query('select * from habits;')
                const habits = habitData.rows.map(h => new Habit(h))
                resolve(habits);
                
            } catch (err) {
                reject("Error retrieving habits")
            }
        })
    }

    //create a habit
    static async create(habit, frequency, streak, user_id){
        return new Promise (async (resolve, reject) => {
            try {
                //const { habit, frequency, streak, user} = habitData;
               // let myUser = await User.findOrCreateByName(user);
                let result = await db.query(`INSERT INTO habits 
                                                    (habit, frequency, streak, user_id) 
                                                    VALUES ($1, $2, $3, $4) 
                                                    RETURNING id`, [ habit, frequency, streak, user_id ]);
                resolve (result.rows[0]);
            } catch (err) {
                reject('habit could not be created');
            }
        });
    };
   
}


module.exports=Habit;