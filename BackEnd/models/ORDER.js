module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    orderHistory: {
      type: DataTypes.STRING
    },
    orderNumber: {
      type: DataTypes.INTEGER
    },
    Quantity: {
      type: DataTypes.INTEGER
    }
  },
  {
    timeStamp: false,
    tableName: "order"
  });

  order.associate = (models) => {
    order.belongsTo(models.user);
    order.belongsToMany(models.item, { through: 'inrelationship', as: 'receiveData', foreignKey: 'ID_order' });
  }
  return order;
}