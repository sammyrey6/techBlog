// This seed has sample user data for testing purposes

const { User } = require('../../Models/User');

const userData = [
  {
    name: 'Joce',
    email: 'jvaldez98@mail.com',
    password: 'ncfsidhh'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;