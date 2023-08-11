// controllers/blogController.js
const express = require('express');
const router = express.Router();
const BlogPost = require('../../Models/BlogPosts');

// GET all blog posts
router.get('/', async (req, res) => {
  try {
    const blogPosts = await BlogPost.findAll();
    res.render('index', { blogPosts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// GET a single blog post with comments
router.get('/:id', async (req, res) => {
  try {
    const blogPost = await BlogPost.findByPk(req.params.id, {
      include: [{ model: Comment }],
    });

    res.render('single-blog', { blogPost });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
