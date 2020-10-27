'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY
    },
    avatar: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.hasMay(models.Review, { foreignKey: 'userId' });
    User.hasMany(models.Shop, { foreignKey: 'ownerId' });
    User.hasMany(models.Follow, { as: 'Follower', foreignKey: 'followerId' });
    User.hasMany(models.Follow, { as: 'Following', foreignKey: 'followingId' });
    User.hasMany(models.Favorite, { foreignKey: 'userId' });
    User.hasMany(models.Order, { foreignKey: 'userId' });
    User.hasMany(models.Purchase, { through: 'Order', otherKey: 'orderId', foreignKey: 'userId' });
    User.hasMany(models.Product, { through: 'Shop', otherKey: 'shopId', 'ownerId'});
  };
  return User;
};