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
    Serial_Number: {
      type: DataTypes.STRING
    },
    Warranty_Start: {
      type: DataTypes.DATE
    },
    Warranty_End: {
      type: DataTypes.DATE
    },
    Warranty_period: {
      type:DataTypes.STRING
    }
  },
  {
    timeStamp: false,
    tableName: "item"
  }
  );

  item.associate = (models) => {
    item.hasMany(models.category);
    item.belongsToMany(models.order, { through: 'inrelationship', as: 'sendDataToOrder', foreignKey: 'ID_item' });
  }

  return item;
}
