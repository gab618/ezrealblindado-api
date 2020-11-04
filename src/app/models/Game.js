const { Sequelize, Model } = require('sequelize');

class Game extends Model {
  static init(sequelize) {
    super.init(
      {
        key: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Game;
