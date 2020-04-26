module.exports = (sequelize, Datatype) => {
  const CATEGORY = sequelize.define('Category', {
    Notebook: {
      type: Datatype.String
    },
    Server: {
      type: Datatype.String
    },
    Deaktop: {
      type: Datatype.String
    },
    Accessory: {
      type: Datatype.String
    }
  });
  
  //Relationship
  return CATEGORY;
}