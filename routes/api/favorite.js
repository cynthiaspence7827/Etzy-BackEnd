const express = require('express');
const { asyncHandler } = require('../../utils');
const router = express.Router();
const { Favorite } = require('../../db/models');
const Sequelize = require('sequelize');

// favorite or unfavorite a product or shop
router.post(
  '/',
  asyncHandler(async (req, res) => {
    if (req.body.favProduct) {
      console.log('before finding', req.body.userId, req.body.productId);
      const existingFavorite = await Favorite.findOne({
        where: {
          [ Sequelize.Op.and ]: [ { userId: req.body.userId }, { productId: req.body.productId } ]
        }
      });
      console.log('after finding');
      if (existingFavorite) {
        console.log('destroying');
        await existingFavorite.destroy();
        res.json({});
      } else {
        console.log('creating');
        const favorite = await Favorite.create({
          userId: req.body.userId,
          favProduct: true,
          productId: req.body.productId
        });
        res.json(favorite);
      }
    } else {
      const existingFavorite = await Favorite.findOne({
        where: {
          [ Op.and ]: [ { userId: req.body.userId }, { favProduct: req.body.favProduct }, { shopId: req.body.shopId } ]
        }
      });
      if (existingFavorite) {
        await existingFavorite.destroy();
        res.json({});
      } else {
        const favorite = await Favorite.create({
          userId,
          favProduct,
          shopId,
          productId
        });
        res.json(favorite);
      }
    }
  })
);

module.exports = router;