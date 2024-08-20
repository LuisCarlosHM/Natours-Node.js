const express = require('express');
const {
  getOverview,
  getTour,
  getLoginForm,
  getSignUpForm,
} = require('../controllers/viewController');

const { isLoggedIn } = require('../controllers/authController');

const router = express.Router();
router.use(isLoggedIn);

router.get('/', getOverview);
router.get('/tour/:slug', getTour);
router.get('/login', getLoginForm);
router.get('/signup', getSignUpForm);

module.exports = router;
