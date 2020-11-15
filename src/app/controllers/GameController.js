const Game = require('../models/Game');
const Log = require('../models/Log');
const { nanoid } = require('nanoid');
const { decryptWithAES } = require('../../utils/aes');
const seApi = require('../../services/se');

class GameController {
  async show(req, res) {
    const key = nanoid(12);
    await Game.create({ key });
    return res.json({ key });
  }

  async store(req, res) {
    const { key, user, hash } = req.body;

    console.log({ key, user, hash });

    const points = decryptWithAES(hash);

    const validKey = await Game.findOne({ where: { key } });
    if (!validKey) {
      return res.status(401).json({ message: 'Invalid submit' });
    }
    await validKey.destroy();

    try {
      await seApi.put(`points/${process.env.SE_CHANNEL}/${user}/${points}`);
      await Log.create({ user, points });
    } catch (error) {
      return res.status(500).json({ error: 'Request error ' + error });
    }

    return res.json({ message: `Points assigned to ${user}` });
  }
}

module.exports = new GameController();
