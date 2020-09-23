import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';

import Url from '../app/models/Url';

const models = [Url];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
