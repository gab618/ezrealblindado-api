const { Sequelize, Model } = require('sequelize');

class Log extends Model {
  static init(sequelize) {
    super.init(
      {
        user: Sequelize.STRING,
        points: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Log;
