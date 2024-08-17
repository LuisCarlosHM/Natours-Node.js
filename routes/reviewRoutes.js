const express = require('express');
const router = express.Router();

const {
  getAllReviews,
  createReview,
  setTourUserIds,
  getReview,
  updateReview,
  deleteReview,
} = require('../controllers/reviewController');

const { protect, restricTo } = require('../controllers/authController');

router
  .route('/')
  .get(getAllReviews)
  .post(protect, restricTo('user'), createReview);
router.route('/:id').get(getReview);

module.exports = router;
