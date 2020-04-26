module.exports = (sequelize, Datatype) => {
  const IN = sequelize.define('IN', {
    IDUser: {
      type: Datatype.Number
    },
    IDItem: {
      type: Datatype.Number
    }
  });

  //Relationship
  return IN;
}