const { Sequelize, Model } = require('sequelize');

class Url extends Model {
  static init(sequelize) {
    super.init(
      {
        url: Sequelize.STRING,
        slug: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Url;
