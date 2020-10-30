const Twit = require('twit');
const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET,
});

class Twitter {
  tweet(message) {
    T.post('statuses/update', { status: message }, function (
      err,
      data,
      response
    ) {
      console.log(data);
    });
  }
}

module.exports = new Twitter();
