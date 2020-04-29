module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
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

  order.associate = (models) => {
    order.belongsTo(models.user);
    order.belongsToMany(models.item, { through: 'inrelationship', as: 'receiveData', foreignKey: 'ID_Order' });
  }
  return order;
}