const userNames = [
    'John123',
    'Rick456',
    'Amanda789',
    'Peter000',
    'Mary111',
    'Bob222',
    'Jane333',
    'Tom444',
    'Kate555',
];

const thoughtTexts = [
    'I love coding!',
    'I love JavaScript!',
    'I love React!',
    'Breakfast is the most important meal of the day!',
    'I love coffee!',
    'I love tea!',
    'I love pizza!',
    'I love burgers!',
    'I love tacos!',
    'I love sushi!',
];

const thoughtReactions = [
    '❤️',
    '😂',
    '😯',
    '😍',
    '😭',
    '😊',
    '👍',
    '😘',
    '🤔',
    '😳',
];

const user = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomName = () =>
`${getRandomArrItem(userNames)} ${getRandomArrItem(userNames)}`;

//Function to generate random thoughts that we can add to the database
const getRandomThought = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            published: Math.random() < 0.5,
            description: getRandomArrItem(thoughtTexts),
            advertiserFriendly: Math.random() < 0.5,
            responses:[...getThoughtReactions()],
        });
    }
    return results;
};

// Create the reactions that will be added to the thoughts
const getThoughtReactions = (int) => {
    if (int === 1) {
        return getRandomArrItem(possibleReactions);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            reactionBody: getRandomArrItem(possilbeReactions),
            username: getRandomName(),
         });
    }
    return results;
};

// Export the functions for use in seeds.js
module.exports = { getRandomName, getRandomThought };