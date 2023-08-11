const sequelize = require('../../config/connection');
const seedReviews = require('./reviewData');
const seedUsers = require('./userData');
const seedBlogPosts = require('./BlogPostData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  // await seedBlogPosts();
  // console.log('\n----- REVIEWS SEEDED -----\n');

  await seedReviews();
  console.log('\n----- REVIEWS SEEDED -----\n');

  process.exit(0);
};

seedAll();