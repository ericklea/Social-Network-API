const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            trimmed: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
        },
        thoughts: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
          },
       ],

        friends: [
          {
            type: Schema.Types.ObjectId,
            ref: 'User'
          },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


// Virtual to count friends
userSchema
    .virtual("friendCount")
    .get(function () {
        return this.freinds.length;
    });



// Initialize User model
const User = model("User", userSchema);

module.exports = User;