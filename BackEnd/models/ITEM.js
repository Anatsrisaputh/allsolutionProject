module.exports = (sequelize, Datatype) => {
  const ITEM = sequelize.define('Item', {
    Image: {
      type: Datatype.String
    },
    Price: {
      type: Datatype.Number
    },
    Brand: {
      type: Datatype.String
    }
  })

  ITEM.associate = (models => {
    ITEM.hasOne(models.CATEGORY)
    ITEM.hasBelongTo(models.ORDER, {though: "IN"})
  })

return ITEM;
}