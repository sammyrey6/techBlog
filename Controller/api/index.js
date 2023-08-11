// routes/index.js
const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const blogRoutes = require('./blogPostRoutes');

router.use('/auth', userRoutes);
router.use('/comments', commentRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
