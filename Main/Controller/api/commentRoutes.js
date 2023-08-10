const express = require('express');
const router = express.Router();
const { Comment } = require('../../Models/Comment');

// Add a comment
router.post('/add', async (req, res) => {
  try {
    const commentData = {
      text: req.body.text,
      user_id: req.session.user_id,
      blogpost_id: req.body.blogpost_id,
    };

    const newComment = await Comment.create(commentData);

    res.status(200).json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
