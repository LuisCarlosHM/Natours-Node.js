const express = require('express');
const reviewRouter = require('./reviewRoutes');

const {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  checkBody,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} = require('../controllers/tourController');

const { protect, restricTo } = require('./../controllers/authController');

const router = express.Router();

router.use('/:tourId/reviews', reviewRouter);

router.route('/monthly-plan/:year').get(getMonthlyPlan);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);

router.route('/').get(protect, getAllTours).post(checkBody, createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(protect, restricTo('admin', 'lead-guide'), deleteTour);

// router.route('/:tourId/reviews').post(protect, restricTo('user'), createReview);

module.exports = router;
