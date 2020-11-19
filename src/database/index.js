const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const Url = require('../app/models/Url');
const Game = require('../app/models/Game');
const Log = require('../app/models/Log');
const Queue = require('../app/models/Queue');

const models = [Url, Game, Log, Queue];

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
