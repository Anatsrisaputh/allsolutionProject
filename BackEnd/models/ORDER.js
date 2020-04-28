module.exports = (sequelize, DataTypes) => {
  const ORDER = sequelize.define('Order', {
    OrderHistory: {
      type: DataTypes.STRING
    },
    OrderNumber: {
      type: DataTypes.INTEGER
    },
    Quantity: {
      type: DataTypes.INTEGER
    }
  });

  // ORDER.associate = (models) => {
  //   ORDER.belongsTo(models.User);
  //   ORDER.belongsToMany(models.Item, {though: models.In, as: 'receiveData', foreignKey: 'ID_Order'});
  // }
  return ORDER;
}