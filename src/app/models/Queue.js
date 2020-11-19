const { Sequelize, Model } = require('sequelize');

class Queue extends Model {
  static init(sequelize) {
    super.init(
      {
        username: Sequelize.STRING,
        completed: Sequelize.BOOLEAN,
        win: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Queue;
