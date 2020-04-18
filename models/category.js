const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class POPSANIME extends Sequelize.Model{}
    POPSANIME.init({
      
    },{sequelize})
    return POPSANIME;
};