module.exports = (sequelize, DataTypes) => {
  const ITEM = sequelize.define('Item', {
    Image: {
      type: DataTypes.STRING
    },
    Price: {
      type: DataTypes.NUMBER
    },
    Brand: {
      type: DataTypes.STRING
    }
  })

  // ITEM.associate = (models) => {
  //   ITEM.hasMany(models.Category);
  //   ITEM.belongsToMany(models.Order, { through: models.In, as: 'sendDataToOrder', foreignKey: 'ID_Item'});
  // }

return ITEM;
}
