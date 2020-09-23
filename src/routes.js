const { Router } = require('express');

const UrlController = require('./app/controllers/UrlController');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ ok: '?XD' });
});

routes.post('/url', UrlController.store);

module.exports = routes;
