const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {
  User,
  Product,
  Review,
  Purchase,
  Shop } = require('../../db/models');
const { asyncHandler, handleValidationErrors } = require('../../utils');

const reviewValidator = [
  check('rating')
    .exists({ checkFalsy: true })
    .withMessage('To submit your review, you need to give a rating.'),
  check('reviewBody')
    .exists({ checkFalsy: true })
    .withMessage('To submit your review, there must be a body')
];

router.post(
  '/',
  reviewValidator,
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const {
      purchaseId,
      rating,
      reviewBody,
      reviewImg,
      anonymous,
      productReview
    } = req.body;
    const review = await Review.create({
      purchaseId,
      rating,
      reviewBody,
      reviewImg,
      anonymous,
      productReview
    });
    res.json(review);
  })
);

router.put(
  '/:id(\\d+)',
  reviewValidator,
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const {
      purchaseId,
      rating,
      reviewBody,
      reviewImg,
      anonymous,
      productReview
    } = req.body;
    const review = await Review.findByPk(req.params.id);
    const updatedReview = await review.update({
      purchaseId,
      rating,
      reviewBody,
      reviewImg,
      anonymous,
      productReview
    });
    res.json(updatedReview);
  })
);

router.delete(
  '/:id(\\d+)',
  asyncHandler(async (req, res) => {
    const review = await Review.findByPk(req.params.id);
    if (review) {
      await review.destroy();
      res.end();
    }
  })
);

module.exports = router;