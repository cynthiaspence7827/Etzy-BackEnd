const router = require('express').Router();
const userRouter = require('./api/user');
const shopRouter = require('./api/shop');
const productRouter = require('./api/product');

router.use('/users', userRouter);
router.use('/shops', shopRouter);
router.use('/products', productRouter);

module.exports = router;
