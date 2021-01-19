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
    console.log(intAmount);

    try {
      const totalUserPoints = await seApi.get(
        `points/${process.env.SE_CHANNEL}/${user}`
      );
      if (totalUserPoints < intAmount) {
        return res.status(412).send(`@${user} Pontos insuficiente!`);
      }
      await seApi.put(`points/${process.env.SE_CHANNEL}/${user}/-${intAmount}`);
    } catch (error) {
      return res.status(500).json({ error: 'Request error ' + error });
    }

    await Bicho.create({ user, bicho, amount: intAmount });

    return res.send(`@${user} Aposta feita no ${bicho}`);
  }
}

module.exports = new BichoController();
