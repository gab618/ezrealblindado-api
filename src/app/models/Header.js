const { Sequelize, Model } = require('sequelize');

class Header extends Model {
  static init(sequelize) {
    super.init(
      {
        text: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Header;
