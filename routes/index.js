const router = require('express').Router();
const userRouter = require('./api/user');
const shopRouter = require('./api/shop');
const productRouter = require('./api/product');
const reviewsRouter = require('./api/review');
const favoriteRouter = require('./api/favorite');

router.use('/users', userRouter);
router.use('/shops', shopRouter);
router.use('/products', productRouter);
router.use('/reviews', reviewsRouter);
router.use('/favorites', favoriteRouter);

module.exports = router;
