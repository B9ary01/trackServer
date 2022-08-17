
const User = require('../models/users')


async function index (req, res) {
    try {
        const users = await User.all;
        
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({err})
    }
}


async function create (req, res) {
    try {
        const user = await User.create(req.body.name, req.body.email, req.body.password);
        res.status(201).json(user);
    
    } catch (err) {
        res.status(422).json({err})
    }
}

module.exports={index,create}
