const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
} = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getUserById);
module.exports = router;