module.exports = (sequelize, DataTypes) => {
  const CATEGORY = sequelize.define('Category', {
    Notebook: {
      type: DataTypes.STRING
    },
    Server: {
      type: DataTypes.STRING
    },
    Desktop: {
      type: DataTypes.STRING
    },
    Accessory: {
      type: DataTypes.STRING
    }
  });
  
  //CATEGORY เขียนให้เป็นตัวพิมพ์ใหญ่เนื่องจาก จะให้ดูแตกต่างจากชื่อของ ตาราง Category
  // CATEGORY.associate = (models) => {
  //   CATEGORY.belongsTo(models.Item);
  //   //(models.Item) .Item นี้ต้องใส่เป็นชื่อตารางนะ
  // }

  return CATEGORY;

}