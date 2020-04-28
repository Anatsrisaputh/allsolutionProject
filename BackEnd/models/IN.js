module.exports = (sequelize, DataTypes) => {
  const IN = sequelize.define('In', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    IDUser: {
      type: DataTypes.NUMBER
    },
    IDItem: {
      type: DataTypes.NUMBER
    }
  });

  return IN;
}