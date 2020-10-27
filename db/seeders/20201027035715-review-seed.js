'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      { purchaseId: 2, rating: 4, reviewBody: 'This mat is great, I wish I would have gotten a thicker mat, but this is good for my daily yoga practice!', reviewImg: '#', anonymous: true, productReview: true, createdAt: new Date(), updatedAt: new Date() },
      { purchaseId: 2, rating: 5, reviewBody: 'I love this shop! It\'s truly amazing, anything you want to create a zen household is here!', anonymous: false, productReview: false, createdAt: new Date(), updatedAt: new Date() },
      { purchaseId: 4, rating: 5, reviewBody: 'This little incense burner is so cute! It looks so wonderful with the incense burning in it :D', anonymous: true, productReview: true, createdAt: new Date(), updatedAt: new Date() },
      { purchaseId: 7, rating: 5, reviewBody: 'This incense smells amazing, I\'m so glad I got this one! I can feel the positive vibes!', reviewImg: '#', anonymous: false, productReview: true, createdAt: new Date(), updatedAt: new Date() },
      { purchaseId: 15, rating: 5, reviewBody: 'Zen With Bethany is amazing, she really never dissappoints! Thank you, Beth, for all the great products, you are the best!', anonymous: false, productReview: false, createdAt: new Date(), updatedAt: new Date() },
      { purchaseId: 15, rating: 5, reviewBody: 'Wow, this incense is amazing, I can feel the positive vibes flowing from it into my home <3', anonymous: true, productReview: true, createdAt: new Date(), updatedAt: new Date() },
      { purchaseId: 21, rating: 3, reviewBody: 'Artful Demo is a great shop with amazing art, definitely recommend their shop to anyone looking to decorate :D', anonymous: false, productReview: false, createdAt: new Date(), updatedAt: new Date() },
      { purchaseId: 21, rating: 4, reviewBody: 'This painting is so beautiful, I have it hanging in my office and it fits perfectly!', reviewImg: '#', anonymous: false, productReview: true, createdAt: new Date(), updatedAt: new Date() },
      { purchaseId: 22, rating: 5, reviewBody: 'This horse sculpture is beautiful and fits perfectly in with my decor', anonymous: true, productReview: true, createdAt: new Date(), updatedAt: new Date() },
      { purchaseId: 23, rating: 4, reviewBody: 'I love this little Buddha sculpture, it\'s perfect to place little candles!! It was smaller than I expected, but it\'s still wonderful', reviewImg: '#', anonymous: false, productReview: true, createdAt: new Date(), updatedAt: new Date() },
      { purchaseId: 25, rating: 5, reviewBody: 'Zen With Bethany is such a wonderful little shop, I\'m happy to have found it, thank you Beth for the amazing stuff! Namaste ^_^', anonymous: false, productReview: false, createdAt: new Date(), updatedAt: new Date() },
      { purchaseId: 25, rating: 5, reviewBody: 'This yoga block is PERFECT!!', reviewImg: '#', anonymous: true, productReview: true, createdAt: new Date(), updatedAt: new Date() },
      { purchaseId: 26, rating: 5, reviewBody: 'I needed a yoga block for my practice, I don\'t know what I would have done if I were to have gone anywhere else, this one is absolutely wonderful!', anonymous: false, productReview: true, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
