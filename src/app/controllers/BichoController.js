const Bicho = require('../models/Bicho');
const seApi = require('../../services/se');
const bichos = require('../../animals');

class BichoController {
  async store(req, res) {
    const { user, bicho, amount } = req.query;
    const intAmount = parseInt(amount);

    const isValid = bichos.includes(bicho);

    if (!isValid) {
      return res.status(412).send(`@${user} Bicho inválido. Ver !bichos`);
    }

    if (intAmount < 1) {
      return res
        .status(412)
        .send(`@${user} Quantidade inválida. Valor mínimo: 1`);
    }

    try {
      const {
        data: { points },
      } = await seApi.get(`points/${process.env.SE_CHANNEL}/${user}`);

      if (points < intAmount) {
        return res.status(412).send(`@${user} Pontos insuficiente!`);
      }

      await seApi.put(`points/${process.env.SE_CHANNEL}/${user}/-${intAmount}`);
    } catch (error) {
      return res.status(500).json({ error: 'Request error ' + error });
    }

    const betExists = await Bicho.findOne({ where: { user, bicho } });

    if (betExists) {
      await betExists.update({ amount: intAmount + betExists.amount });
    } else {
      await Bicho.create({ user, bicho, amount: intAmount });
    }

    return res.send(`@${user} Aposta feita no ${bicho}`);
  }

  async update(req, res) {
    const bets = await Bicho.findAll();

    if (bets.length === 0) {
      return res.send('Nenhuma aposta registrada');
    }

    const bicho = bichos[Math.floor(Math.random() * bichos.length)];
    let winners = await Bicho.findAll({ where: { bicho } });

    let output = 'Resultado: Bicho ';

    while (winners.length === 0) {
      output = output + `>${bicho.toUpperCase()}< | Ninguem acertou :(`;
      return res.send(output);
    }

    output = output + `>${bicho.toUpperCase()}< | Ganhadores: `;

    for (const winner of winners) {
      await seApi.put(
        `points/${process.env.SE_CHANNEL}/${winner.user}/${winner.amount * 18}`
      );
      output = output + `@${winner.user} -> ${winner.amount * 18} pontos; `;
    }

    await Bicho.destroy({ where: {}, truncate: true });

    return res.send(output);
  }
}

module.exports = new BichoController();
