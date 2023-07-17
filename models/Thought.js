const { Schema, model } = require('mongoose');
const formatDate = require('../utils/date.js');

// Schema to create Reaction model
const reactionSchema = new Schema(
    {
        //reactionId: {
           // type: Schema.Types.ObjectId,
            //default: () => new Types.ObjectId()
       // },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        userName: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => formatDate(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // Use a getter method to format the timestamp on query
            get: createdAtVal => formatDate(createdAtVal)
        },
        userName: {
            type: String,
            required: true
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

// Virtual to count reactions
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

// Initialize Thought model
const Thought = model("Thought", thoughtSchema);

console.log(formatDate(Date.now()));

module.exports = Thought;
