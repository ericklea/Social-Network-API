const connection = require('../config/connection');
const { User, Thoughts } = require('../models');
const { getRandomName, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected to database');
    // Delete the collections if they exist
    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
        await connection.dropCollection('thoughts');
    }
    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
        await connection.dropCollection('users');
    }

    const users = [];
    const thoughts = getRandomThoughts(10);

    for (let i = 0; i < 10; i++) {
        const username = getRandomName();
    
    users.push({ 
        username
    });
    }   

    await User.collection.insertMany(users);
    await Thoughts.collection.insertMany(thoughts);

    // Loop through the saved thoughts, for reach thought, randomly assign a user as a friend
    console.table(users);
    console.table(thoughts);
    console.info('seeding done!');
    process.exit(0);
});


