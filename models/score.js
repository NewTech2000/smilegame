'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
     
  }
  score.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    score: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.TEXT,
    },
    level: {
      type: DataTypes.TEXT,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'score',
  });
  return score;
};