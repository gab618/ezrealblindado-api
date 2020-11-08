const cancelList = require('../../cancelList');

class CancelController {
  async show(req, res) {
    let { sender, receiver } = req.query;

    if (!receiver) {
      receiver = sender;
    }

    if (receiver[0] !== '@') {
      receiver = '@' + receiver;
    }

    const cancel = cancelList[Math.floor(Math.random() * cancelList.length)];
    const msg = `${receiver} foi cancelado(a) por ${cancel}`;

    return res.send(msg);
  }
}

module.exports = new CancelController();
