'use strict';
const {Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name:{
      type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
      type:DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          msg: 'debe ser formato de email valido'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 64],
            msg: 'La contraseña debe tener al menos 6 caracteres'
          }
        }
    }
  }, {
    sequelize,
    modelName: 'User',
    // timestamps:false,
    // createdAt:false

  });
  return User;
};