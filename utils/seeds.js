const connection = require('./config/connection');
const { User, Thought } = require('./models');

const users = [
    {
        userName: 'Alex123',
        email: 'Alex123@gmail.com',
        thought: 'I love pizza!'
    },
    {
        userName: 'Bobby456',
        email: 'Bobby456@gmail.com',
        thought: 'I love tacos!'
    },
    {
        userName: 'Cindy789',
        email: 'Cindy789@gmail.com',
        thought: 'I love burgers!'
    },
    {
        userName: 'Derek012',
        email: 'Derek012@gmail.com',
        thought: 'I love hot dogs!'
    },
    {
        userName: 'Erika345',
        email: 'Erika345@gmail.com',
        thought: 'I love ice cream!'
    },
]

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Database connected');
    await Thought.deleteMany();
    await User.deleteMany();

    await User.collection.insertMany(users);

    console.info('Users seeded');
    process.exit(0);
});



