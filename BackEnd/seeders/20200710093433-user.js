'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [{
      Sex: "male", 
      Name: "admin", 
      Email: "admin@test", 
      Telephone: 9999999, 
      MobilePhone: 999, 
      Password: "xxxxxxx", 
      Address: "ccccc", 
      VillageBuilding:"ccccc", 
      Distric: "NNNNN", 
      Province: "hfhfhhfj"
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
