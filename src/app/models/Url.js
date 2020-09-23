import Sequelize, { Model } from 'sequelize';

class User extends Model {
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

export default User;
