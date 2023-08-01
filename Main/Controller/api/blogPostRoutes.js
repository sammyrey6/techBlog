const router = require('express').Router();
const { BlogPost } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll();
    const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));

    //rendering blogPost.handlebars view
    res.render('blogPost', { blogPosts });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/blogPosts', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findOne({ where: { id: req.body.blogPost } });
  
    if (!blogPostData) {
      res
        .status(400)
        .json({ message: 'No blog post found.' });
      return;
    }
  
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;