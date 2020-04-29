module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    Image: {
      type: DataTypes.STRING
    },
    Price: {
      type: DataTypes.INTEGER
    },
    Brand: {
      type: DataTypes.STRING
    }
  })

  item.associate = (models) => {
    item.hasMany(models.category);
    item.belongsToMany(models.order, { through: 'inrelationship', as: 'sendDataToOrder', foreignKey: 'ID_Item' });
  }

  return item;
}
