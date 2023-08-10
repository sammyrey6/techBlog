const { BlogPost } = require('../../Models/BlogPosts');

const blogPostData = [
  {
    name: 'First Blog Post',
    user_id: 1,
    post: 'This is the content of the first blog post.',
  },
  {
    name: 'Second Blog Post',
    user_id: 1,
    post: 'This is the content of the second blog post.',
  },
  {
    name: 'Third Blog Post',
    user_id: 1,
    post: 'Check out this amazing tech discovery!',
  },
  {
    name: 'Fourth Blog Post',
    user_id: 1,
    post: 'A guide to the latest programming trends.',
  },
];

const seedBlogPosts = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPosts;
