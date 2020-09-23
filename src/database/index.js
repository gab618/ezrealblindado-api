const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const Url = require('../app/models/Url');

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

module.exports = new Database();
