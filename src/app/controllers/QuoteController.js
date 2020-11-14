const quotes = require('../../quotes');
const Twitter = require('../../services/twitter');

class QuoteController {
  async show(req, res) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return res.send(quote);
  }

  async store(req, res) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    Twitter.tweet(quote.replace('@', '@.'));
    return res.json({ tweet: quote });
  }
}

module.exports = new QuoteController();
