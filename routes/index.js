const router = require('express').Router();
const userRouter = require('./api/user');

router.use('/users', userRouter);

module.exports = router;
