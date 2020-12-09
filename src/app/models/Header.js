const { Sequelize, Model } = require('sequelize');

class Header extends Model {
  static init(sequelize) {
    super.init(
      {
        text: Sequelize.STRING,
        sender: Sequelize.STRING,
        is_completed: Sequelize.BOOLEAN,
        is_started: Sequelize.BOOLEAN,
        start_time: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Header;
