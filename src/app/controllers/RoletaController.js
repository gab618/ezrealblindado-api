const Log = require('../models/Log');
const seApi = require('../../services/se');

class RoletaController {
  async show(req, res) {
    const { sender } = req.query;

    const randomNumber = Math.floor(Math.random() * 101);
    const minimumNumber = 60;
    console.log(randomNumber);

    let msg = '';

    if (randomNumber > minimumNumber) {
      try {
        const response = await seApi.put(
          `points/${process.env.SE_CHANNEL}/${sender}/4`
        );
        console.log(response);
        await Log.create({ user: sender, points: 4 });
        msg = `/me ${sender} stackou +4 stacks da gota PogChamp`;
      } catch (error) {
        msg = '/me Erro: ' + error;
      }
    } else {
      if (randomNumber > minimumNumber / 2) {
        msg = `/timeout ${sender} 7 Farma timeout ai kkk`;
      } else {
        msg = `/timeout ${sender} 15 só o !quote 31 né velho xD`;
      }
    }

    return res.send(msg);
  }
}

module.exports = new RoletaController();
