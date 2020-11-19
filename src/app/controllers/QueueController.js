const Queue = require('../models/Queue');

class QuoteController {
  //fila
  async index(req, res) {
    const queue = await Queue.findAll({ where: { completed: false } });
    console.log(queue);
    return res.json(queue);
  }

  //proximo
  async show(req, res) {
    const next = await Queue.findOne({ where: { completed: false } });
    console.log(next);
    return res.json(next);
  }

  //entry
  async store(req, res) {
    const { sender } = req.query;
    const alreadyInQueue = await Queue.findOne({
      where: { username: sender, completed: false },
    });

    if (alreadyInQueue) {
      return res.send(`@${sender} você ja está na fila`);
    }

    await Queue.create({ username: sender });
    const list = await Queue.findOne({ where: { completed: false } });

    return res.send(`@${sender} você entrou na fila na posição ${list.length}`);
  }

  //set result
  async update(req, res) {
    const { result } = req.query;

    const win = result === 'win' ? true : false;
    const points = win ? 100 : 50;

    const player = await Queue.findOne({ where: { completed: false } });

    if (!player) {
      res.send('A fila está vazia');
    }

    await player.update({ win, completed: true });

    return res.send(`+${points}💧 para ${player.username} PogChamp`);
  }
}

module.exports = new QuoteController();
