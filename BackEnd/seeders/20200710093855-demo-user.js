module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('order', [{
      orderHistory: "test1",
       orderNumber: 1, 
       Quantity: 1, 
       userId: 1
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
