const bcrypt = require('bcryptjs');
const express = require('express');
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require('../../utils');
const { makeUserToken, requireAuth } = require('../../auth');
const {
  User,
  Favorite,
  Follow,
  Order,
  Product,
  Purchase,
  Review,
  Shop } = require('../../db/models');
const router = express.Router();

const nameValidators = [
  check("firstName")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a first name.")
    .isLength({ min: 1, max: 50 })
    .withMessage("A first name must be 50 characters or less in length."),
  check("lastName")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a last name.")
    .isLength({ min: 1, max: 50 })
    .withMessage("A last name can't be longer than 50 characters in length."),
];

const emailValidator = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please give us an email.")
    .isEmail()
    .withMessage("Please give us a valid email address.")
    .isLength({ max: 150 })
    .withMessage("An email can't be longer than 80 characters in length.")
    .custom(async (val, { req }) => {
      let emailExists = await User.findOne({ where: { email: val } });
      if (emailExists) {
        throw new Error("Email is in use");
      }
    })
];

const passwordValidator = [
  // MIRA Tested
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please give us a password.")
    .isLength({ min: 8, max: 50 })
    .withMessage("A password must be between 10 to 20 characters in length.")
    .custom((val, { req }) => {
      if (val !== req.body.confirmPassword) {
        throw new Error('Passwords do not match');
      } else {
        return val;
      }
    })
];

// get user by id for profile viewing
router.get(
  '/:id(\\d+)',
  asyncHandler(async (req, res) => {
    const user = await User.findByPk(req.params.id, {
      include: [
        Shop,
        {
          model: Favorite,
          include: [ Shop, Product ]
        },
        {
          model: Follow,
          as: 'Follower',
        },
        {
          model: Follow,
          as: 'Following'
        }
      ]
    });
    res.json(user);
  })
);

// create a new user
router.post(
  '/',
  nameValidators,
  emailValidator,
  passwordValidator,
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstName, lastName, email, hashedPassword
    });
    const token = makeUserToken(newUser);
    res.status(201).json({ token, newUser });
  })
);

// Create a JWT token for a user on login
// return JWT and all information for loggedIn user
router.post('/token',
  emailValidator,
  handleValidationErrors,
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!user || !user.validatePassword(password)) {
      const err = new Error('Login Failed');
      err.title = '401 Login Failed';
      err.status = 401;
      err.errors = [ 'The prvided credentials are invalid' ];
      return next(err);
    }
    const token = makeUserToken(user);
    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: Shop,
          include: Product
        },
        {
          model: Follow,
          as: 'Follower'
        },
        {
          model: Follow,
          as: 'Following'
        },
        {
          model: Favorite,
          include: [ Shop, Product ]
        },
        {
          model: Order,
          include: {
            model: Purchase,
            include: [
              {
                model: Product,
                include: Shop
              },
              Review
            ]
          }
        }
      ]
    });
    res.json({ token, user });
  })
);

router.get(
  '/:id(\\d+)/favorites',
  asyncHandler(async (req, res) => {
    const user = await User.findByPk(req.params.id);
    const favorites = await Favorite.findAll({
      where: {
        userId: user.id
      }
    });
    res.json(favorites);
  })
);

// Edit user data by id
// name change
// email change
// router.patch(
//   '/:id(\\d+)',
//   asyncHandler(async (req, res) => {

//   })
// );

// password change (verify old password)
// router.patch(
//   '/:id(\\d+)/change-password',
//   passwordValidator,
//   asyncHandler(async (req, res) => {

//   })
// );

// Delete user by id
// router.delete(
//   '/:id(\\d+)',
//   asyncHandler(async (req, res) => {
//     const { email, password } = req.body;
//     const user = await User.findOne({
//       where: { email }
//     });
//     if (!user || !user.validatePassword(password)) {
//       res.status(401).end();
//     }
//     await User.destroy(req.params.id);
//     res.status(204).end();
//   })
// );

User.prototype.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.hashedPassword.toString());
};

module.exports = router;