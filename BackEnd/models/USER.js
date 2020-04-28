module.exports = (sequelize, DataTypes) => {
  const USER = sequelize.define('User', {
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
      type: DataTypes.NUMBER
    },
    MobilePhone: {
      type: DataTypes.NUMBER
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
  });

  // USER.associate = (models) => {
  //   USER.hasMany(models.Order);
  // }
  
  return USER;
}