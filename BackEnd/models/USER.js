module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    Gender: {
      type: DataTypes.STRING
    },
    Name: {
      type: DataTypes.STRING
    },
    Email: {
      type: DataTypes.STRING
    },
    Telephone: {
      type: DataTypes.INTEGER
    },
    MobilePhone: {
      type: DataTypes.INTEGER
    },
    Password: {
      type: DataTypes.STRING
    },
    Address: {
      type: DataTypes.STRING
    },
    VillageBuilding: {
      type: DataTypes.STRING
    },
    Distric: {
      type: DataTypes.STRING
    },
    Province: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING
      }
  },
  {
    tableName: "user",
    timestamps: false,
  }
  );

  user.associate = (models) => {
    user.hasMany(models.order);
  }

  return user;
}