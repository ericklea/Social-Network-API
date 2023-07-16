const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// To get all users or create a user
// /api/users
router.route('/').get(getAllUsers).post(createUser);

// To get, update, or delete a user by id
// /api/users/userId
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

// To add or remove a friend
// /api/users/userId/friends/friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;