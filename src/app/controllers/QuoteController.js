const quotes = require('../../quotes');
const Twitter = require('../../services/twitter');

class QuoteController {
  async show(req, res) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    Twitter.tweet(quote);
    return res.send(quote);
  }
}

module.exports = new QuoteController();
