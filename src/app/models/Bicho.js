const { Sequelize, Model } = require('sequelize');

class Bicho extends Model {
  static init(sequelize) {
    super.init(
      {
        user: Sequelize.STRING,
        bicho: Sequelize.STRING,
        amount: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Bicho;
