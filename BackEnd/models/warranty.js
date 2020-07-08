module.exports = (sequelize, DataTypes) => {
  const warranty = sequelize.define('warranty', {
    serial_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    warranty_start: {
      type: DataTypes.DATE
    },
    warranty_end: {
      type: DataTypes.DATE
    },
  },
  {
    tableName: "warranty"
  }
  );
  return warranty;
}