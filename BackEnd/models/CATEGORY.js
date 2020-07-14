module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    Notebook: {
      type: DataTypes.STRING
    },
    Server: {
      type: DataTypes.STRING
    },
    Desktop: {
      type: DataTypes.STRING
    },
    SSD: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: "category",
    timestamps: false
  }
  );

  // category เขียนให้เป็นตัวพิมพ์ใหญ่เนื่องจาก จะให้ดูแตกต่างจากชื่อของ ตาราง category
  category.associate = (models) => {
    category.belongsTo(models.item);
    //(models.Item) .Item นี้ต้องใส่เป็นชื่อตารางนะ
  }

  return category;

}