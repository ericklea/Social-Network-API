const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThoughtById,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

// To get all thoughts or create a thought
// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// To get, update, or delete a thought by id
// /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById);

// To add a reaction
// /api/thoughts/thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)

// To remove a reaction
// /api/thoughts/:thoughtId/reactions/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;