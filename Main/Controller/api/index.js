const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/users', userRoutes);
router.use('/blogPostRoutes', blogPostRoutes);
router.use('/reviewRoutes', reviewRoutes);

module.exports = router;