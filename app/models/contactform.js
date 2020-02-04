module.exports = function(sequelize, DataTypes) {
    var Contactform = sequelize.define("Contactform", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sender_email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      reason: {
        type: DataTypes.STRING,
        allowNull: false
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });

    return Contactform;
};