const quotes = require('../../quotes');
const Twitter = require('../../services/twitter');

class QuoteController {
  async show(req, res) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return res.send(quote);
  }

  async create(req, res) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    Twitter.tweet(quote);
    return res.json({ tweet: quote });
  }
}

module.exports = new QuoteController();
