const { Router } = require('express');

const UrlController = require('./app/controllers/UrlController');
const MasteryController = require('./app/controllers/MasteryController');
const QuoteController = require('./app/controllers/QuoteController');
const PointsController = require('./app/controllers/PointsController');
const GameController = require('./app/controllers/GameController');
const GreetingController = require('./app/controllers/GreetingController');
const CancelController = require('./app/controllers/CancelController');
const TweetController = require('./app/controllers/TweetController');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ ok: '?XD' });
});

routes.post('/api/url', UrlController.store);
routes.get('/api/mastery', MasteryController.show);
routes.get('/api/quote', QuoteController.show);
routes.post('/api/quote', QuoteController.store);
routes.put('/api/points', PointsController.update);
routes.get('/api/game', GameController.show);
routes.post('/api/game', GameController.store);
routes.get('/api/greeting', GreetingController.show);
routes.get('/api/cancel', CancelController.show);
routes.get('/api/tweet', TweetController.show);

routes.get('/:id', UrlController.show);

module.exports = routes;
