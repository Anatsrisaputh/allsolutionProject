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

//Relationship

return ITEM;
}