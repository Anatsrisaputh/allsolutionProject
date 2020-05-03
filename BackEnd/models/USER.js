module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    Sex: {
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
    }
  },
  {
    timeStamp: false,
    tableName: "user"
  }
  );

  user.associate = (models) => {
    user.hasMany(models.order);
  }

  return user;
}