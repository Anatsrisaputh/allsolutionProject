module.exports = (sequelize, Datatype) => {
  const USER = sequelize.define('User', {
    Sex: {
      type: Datatype.String
    },
    Name: {
      type: Datatype.String
    },
    Email: {
      type: Datatype.Email
    },
    Telephone: {
      type: Datatype.Number
    },
    MobilePhone: {
      type: Datatype.Number
    },
    Password: {
      type: Datatype.String
    },
    Address: {
      type: Datatype.String
    },
    VillageBuilding: {
      type: Datatype.String
    },
    Distric: {
      type: Datatype.String
    },
    Province: {
      type: Datatype.String
    }
  });

  //RelationShip
  return USER;
}