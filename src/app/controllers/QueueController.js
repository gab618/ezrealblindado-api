const Queue = require('../models/Queue');
const seApi = require('../../services/se');

class QuoteController {
  //fila
  async index(req, res) {
    const queue = await Queue.findAll({ where: { completed: false } });

    if (queue.length === 0) {
      return res.send('A fila está vazia');
    }

    let output = '';
    queue.map((position, index) => {
      const line = ` ${index + 1}) ${position.username} |`;
      output = output + line;
    });

    return res.send(output);
  }

  //proximo
  async show(req, res) {
    const next = await Queue.findOne({ where: { completed: false } });
    if (!next) {
      return res.send('A fila está vazia');
    }
    return res.send(`É a vez de @${next.username}`);
  }

  //entry
  async store(req, res) {
    const { sender, pass } = req.query;
    const secretPass = process.env.GAME_SECRET;

    if (pass !== secretPass) {
      return res.send('Não autorizado');
    }

    const alreadyInQueue = await Queue.findOne({
      where: { username: sender, completed: false },
    });

    if (alreadyInQueue) {
      return res.send(`@${sender} você ja está na fila`);
    }

    await Queue.create({ username: sender });
    const list = await Queue.findAll({ where: { completed: false } });

    return res.send(`@${sender} você entrou na fila na posição ${list.length}`);
  }

  //set result
  async update(req, res) {
    const { result, pass } = req.query;
    const secretPass = process.env.GAME_SECRET;

    if (pass !== secretPass) {
      return res.send('Não autorizado');
    }

    if (result !== 'win' && result !== 'lose' && result !== 'skip') {
      return res.send('Opção inválida. Opções: win, lose, skip');
    }

    const win = result === 'win' ? true : false;
    let points = win ? 100 : 50;

    const player = await Queue.findOne({ where: { completed: false } });

    if (!player) {
      res.send('A fila está vazia');
    }

    if (result === 'skip') {
      await player.update({ win, completed: true });
      return res.send(`@${player.username} skipado`);
    }

    try {
      await seApi.put(
        `points/${process.env.SE_CHANNEL}/${player.username}/${points}`
      );
    } catch (error) {
      return res.send('@ezrealblindado foi burro nos códigos mais uma vez Zzz');
    }

    await player.update({ win, completed: true });

    return res.send(`+${points}💧 para ${player.username} PogChamp`);
  }
}

module.exports = new QuoteController();
