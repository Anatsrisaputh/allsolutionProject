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
    },
    Quantity: {
      type: DataTypes.INTEGER
    },
    SerialNumber: {
      type: DataTypes.STRING
    },
    WarrantyStart: {
      type: DataTypes.DATE
    },
    WarrantyEnd: {
      type: DataTypes.DATE
    },
  },
  {
    tableName: "item",
    timestamps: false,
  }
  );

  item.associate = (models) => {
    item.hasMany(models.category);
    item.belongsToMany(models.order, { through: 'inrelationship', as: 'sendDataToOrder', foreignKey: 'ID_item' });
  }

  return item;
}
