const User = require('../models/User');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find()
        .select('-__v')
        .then(dbUserData => {
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .select('-__v')
        .populate('friends')
        .populate('thoughts')
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    // create a user
    createUser(req, res) {
        User.create(req.body)
        .then(dbUserData => {
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        }
        );
    },

    // update a user
    updateUserById(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId }, 
            { $set: req.body }, 
            { runValidators: true, new: true }
        )
        .then((dbUserData) => {
            if (!dbUserData) {
                return res.status(404).json({ message: })
            }
        }
        

