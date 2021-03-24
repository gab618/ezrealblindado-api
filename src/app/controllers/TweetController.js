const Twitter = require('../../services/twitter');

class TweetController {
  async show(req, res) {
    let { sender, tweet } = req.query;

    if (!tweet) {
      return res.status(400).json({ error: 'No tweet provided' });
    }

    if (!sender) {
      sender = '🕵️';
    }

    tweet = tweet.replace('@', '@.');
    tweet = tweet.replace('.', '. ');
    tweet = tweet.slice(0, 277 - sender.length);
    Twitter.tweet(`${sender}: ${tweet}`);
    return res.send(`tweetado com sucesso em nome de @${sender}`);
  }
}

module.exports = new TweetController();
