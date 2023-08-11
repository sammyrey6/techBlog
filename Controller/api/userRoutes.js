const express = require('express');
const router = express.Router();
const { User } = require('../../Models/User');
const bcrypt = require('bcrypt');

// Login page
router.get('/login', (req, res) => {
  res.render('login');
});

// Login process
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res.status(400).render('login', { message: 'Incorrect email or password' });
    }

    const validPassword = await user.checkPassword(req.body.password);

    if (!validPassword) {
      return res.status(400).render('login', { message: 'Incorrect email or password' });
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res.redirect('/');
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

module.exports = router;
