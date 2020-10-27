'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      { name: 'Horse Sculpture', price: '10.99', images: 'https://canary.contestimg.wish.com/api/webimage/5f913b41202b8818c1f04d7a-large.jpg?cache_buster=cc10bd7ef1ae4cfc05bc8f4b76e8fe5c', description: 'Horse head sculpture with square base. Comes in blue, purple, black, green, and gold', options: JSON.stringify({ colors: [ 'blue', 'purple', 'black', 'green', 'gold' ] }), inventory: 12, shopId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Buddha Sculpture', price: '15.35', images: 'https://canary.contestimg.wish.com/api/webimage/5e153a1c074cc90599f53932-3-large.jpg,https://canary.contestimg.wish.com/api/webimage/5e153a1c074cc90599f53932-2-large.jpg,https://canary.contestimg.wish.com/api/webimage/5e153a1c074cc90599f53932-4-large.jpg', description: 'Decorative Buddha Sculpture with Lotus Bowl', inventory: 30, shopId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sun and Moon Tapestry', price: '19.99', images: 'https://canary.contestimg.wish.com/api/webimage/5d79b8ca880bca0573b35b65-large.jpg?cache_buster=5b39837df77860969989d391cd6531c6,https://canary.contestimg.wish.com/api/webimage/5d79b8ca880bca0573b35b65-2-large.jpg,https://canary.contestimg.wish.com/api/webimage/5d79b8ca880bca0573b35b65-4-large.jpg,https://canary.contestimg.wish.com/api/webimage/5d79b8ca880bca0573b35b65-6-large.jpg,https://canary.contestimg.wish.com/api/webimage/5d79b8ca880bca0573b35b65-7-large.jpg,https://canary.contestimg.wish.com/api/webimage/5d79b8ca880bca0573b35b65-8-large.jpg', description: 'Wall Tapestry of the sun and the moon, comes in the 5 styles in pictures.', options: JSON.stringify({ style: [ 'colorful', 'bright black and white', 'dark black and white', 'blue and gold', 'gold' ] }), inventory: 32, shopId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dark Colorful Tree in Lightbulb Painting', price: '35.75', images: 'https://canary.contestimg.wish.com/api/webimage/5f197d43281e903afd9bf55d-large.jpg?cache_buster=896894cbe1afe66699145713cfece4de,https://canary.contestimg.wish.com/api/webimage/5f197d43281e903afd9bf55d-1-large.jpg,https://canary.contestimg.wish.com/api/webimage/5f197d43281e903afd9bf55d-2-large.jpg,https://canary.contestimg.wish.com/api/webimage/5f197d43281e903afd9bf55d-3-large.jpg,https://canary.contestimg.wish.com/api/webimage/5f197d43281e903afd9bf55d-4-large.jpg,https://canary.contestimg.wish.com/api/webimage/5f197d43281e903afd9bf55d-7-large.jpg', description: 'Beatiful dark lightbulb with bright colorful tree inside. Canvas painting comes in 8 sizes.', options: JSON.stringify({ size: [ '40 x 40', '50 x 50', '60 x 60', '70 x 70', '30 x 40', '30 x 45', '40 x 60', '50 x 70' ] }), inventory: 120, shopId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Yoga Block', price: '25.50', images: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-yoga-blocks-2020-1589563206.png?crop=1.00xw:1.00xh;0,0&resize=768:*', description: 'Attention all Yogi\'s! We have your yoga blocks! These yoga blocks are comfortable, strong, and stable to reach your strength, flexibility, and balance goals.nhjthh', options: JSON.stringify({ material: [ 'foam', 'rubber', 'cork' ], color: [ 'blue', 'purple', 'pink', 'orange', 'red', 'black', 'brown', 'cork' ] }), inventory: 437, shopId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: '8mm Black Non-Slip Yoga Mat', price: '90.00', images: 'https://cdn.shopify.com/s/files/1/0132/3529/0170/products/2132md-GRP-4mm-71-183011010-Mats-Black_02.jpg?v=1598918699,https://cdn.shopify.com/s/files/1/0132/3529/0170/products/2132md-GRP-4mm-71-183011010-Adapt-Mats-Black_01.jpg?v=1598918699,https://cdn.shopify.com/s/files/1/0132/3529/0170/products/2132md-GRP-4mm-71-183011010-Adapt-Mats-Black_03.jpg?v=1598918699,https://cdn.shopify.com/s/files/1/0132/3529/0170/products/2132md-GRP-4mm-71-183011010-Adapt-Mats-Black_04.jpg?v=1598918699', description: 'This thick mat is exactly what you need for your practice. Perfect for Yogi\'s of all levels! My personal favorite!', inventory: 60, shopId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Black and Gold Coffin Incense Burner', price: '25.50', images: 'https://www.newageincense.com/images/products/a02-02-8047c%20(black%20%20with%20gold%20print%20symbols).jpg,https://www.newageincense.com/images/products/secondary/a02-02-8047c%20(black%20%20with%20gold%20print%20symbols)-2.jpg,https://www.newageincense.com/images/products/secondary/a02-02-8047c%20(black%20%20with%20gold%20print%20symbols)-1.jpg', description: 'Coffin incense burner with holes on the ends to hold your incense sticks as well as two metal cone burning sections on the inside. I love how incense burns in these, it\'s beautiful and burns at just the right pace.', inventory: 437, shopId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: '6mm Yoga Mat', price: '40.00', images: 'https://images.lululemon.com/is/image/lululemon/LU9A78S_041059_2?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72,https://images.lululemon.com/is/image/lululemon/LU9A78S_046837_2?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72,https://images.lululemon.com/is/image/lululemon/LU9A78S_038141_2?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72,https://images.lululemon.com/is/image/lululemon/LU9A75S_0001_2?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72', description: 'This yoga mat is perfect for any level yoga practice, any style. To fit your personal practice, style, and vibe, this mat comes in several different designs.', options: JSON.stringify({ color: [ 'blue', 'orange', 'purple', 'gray' ] }), inventory: 95, shopId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Candles', price: '15.98', images: 'https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw926ee801/hires/026182153.jpg?sh=471,https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc9012d67/hires/026177099.jpg?sh=471', description: 'The perfect inviting aromas to promote relaxation and to make your home feel like home. Enjoy these new scents!', options: JSON.stringify({ scent: [ 'Sugared Snickerdoodle', 'Vanilla Balsam' ]}), inventory: 38, shopId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Artful Mountain Incense Burner', price: '25.20', images: 'https://cdn.shopify.com/s/files/1/0090/6199/0496/products/581744b2N7bfbb5d7_600x@2x.jpg?v=1556036296,https://cdn.shopify.com/s/files/1/0090/6199/0496/products/581744b2N34434694_600x@2x.jpg?v=1556036296,https://cdn.shopify.com/s/files/1/0090/6199/0496/products/581744b3N431dc7e9_600x@2x.jpg?v=1556036296,https://cdn.shopify.com/s/files/1/0090/6199/0496/products/7_8f157841-57d6-488c-9f85-7b494a0a315a_600x@2x.png?v=1556036296', description: 'Beautiful mountain scenery incense burner. Cones are amazing to burn in this one, the moke rolls down and fogs the mountains so magically. You can even use it to burn incense sticks, an all in one beautiful addition to any relaxing living space.' inventory: 47, shopId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Incense Sticks', price: '3.50', images: 'https://cdn.shopify.com/s/files/1/0228/1386/8109/products/ACC_112_02_grande_2x_aa350bd9-0479-4ef0-8124-3a402f196f12_590x.jpg?v=1586465626,https://cdn.shopify.com/s/files/1/0228/1386/8109/products/Lavender_Incense_Stick_Bag_Photo_1024x1024_b2e88f16-7d8b-45c0-a131-f791f3d28484_540x.jpg?v=1586465632,https://cdn.shopify.com/s/files/1/0228/1386/8109/products/FHP_Incense_Lavender_2_1024x1024_53459433-4219-4422-99ce-da065acd5e39_540x.jpg?v=1586465640', description: 'Incense is used for so many reasons, and no matter the reason, we have what you need. THese aromas will bring good vibes to your home and ward off the bad ones. Use these for your yoga practice, meditation, relaxation, or just to make your home smell nice!', options: JSON.stringify({ scent: [ 'lavender', 'vanilla', 'jungle juice', 'dragon\'s blood', 'friends', 'egyptian musk', 'jasmine', 'yoga', 'citrus' ] }), inventory: 437, shopId: 2, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Products', null, {});
  }
};