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
    warranty_duration_years: {
      type: DataTypes.STRING(2)
    },
    warranty_duration_months: {
      type: DataTypes.STRING(2)
    }
  },
  {
    tableName: "warranty"
  }
  );
  return warranty;
}