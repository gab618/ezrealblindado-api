const { Router } = require('express');

const UrlController = require('./app/controllers/UrlController');
const MasteryController = require('./app/controllers/MasteryController');
const QuoteController = require('./app/controllers/QuoteController');
const PointsController = require('./app/controllers/PointsController');
const GameController = require('./app/controllers/GameController');
const GreetingController = require('./app/controllers/GreetingController');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ ok: '?XD' });
});

routes.post('/api/url', UrlController.store);
routes.get('/api/mastery', MasteryController.show);
routes.get('/api/quote', QuoteController.show);
routes.put('/api/points', PointsController.update);
routes.get('/api/game', GameController.show);
routes.post('/api/game', GameController.update);
routes.get('/api/greeting', GreetingController.show);

routes.get('/:id', UrlController.show);

module.exports = routes;
