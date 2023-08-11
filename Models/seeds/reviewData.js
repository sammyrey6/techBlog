// A review data seed file with data for four sample reviews. Each review has a user id, burger id, and the text of the review itself.

const Comment = require('../../Models/Comment');

const CommentData = [
  {text: 'sure'},
  {text: 'I guess.'},
  {text: 'Who.'},
  {text: 'Your opinion is not good'}
];

const seedComment = () => Comment.bulkCreate(CommentData);

module.exports = seedComment;