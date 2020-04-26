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

  //RelationShip
  return ORDER;
}