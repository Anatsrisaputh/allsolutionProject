module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    Image: {
      type: DataTypes.STRING
    },
    Name: {
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
