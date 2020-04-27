module.exports = (sequelize, Datatype) => {
  const ORDER = sequelize.define('Order', {
    OrderHistory: {
      type: Datatype.String
    },
    OrderNumber: {
      type: Datatype.Number
    },
    Quantity: {
      type: Datatype.Number
    }
  });

  ORDER.associate = (models) => {
    ORDER.hasMany(models.USER)
    ORDER.hasBelongTo(models.ITEM, {though: "IN"})
  }
  return ORDER;
}