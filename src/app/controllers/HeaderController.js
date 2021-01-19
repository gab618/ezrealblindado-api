const Header = require('../models/Header');
const { differenceInSeconds } = require('date-fns');

class HeaderController {
  async index(req, res) {
    const { sender } = req.query;
    const headerList = await Header.findAll({
      where: { is_completed: false },
      order: ['id'],
    });

    let position = 0;

    const list = headerList.map((header, index) => {
      if (header.sender === sender) {
        position = index + 1;
      }
      return header.sender;
    });
    return res.send(`@${sender} sua posição é ${position} - [${list}]`);
  }

  async show(req, res) {
    const headerList = await Header.findAll({
      where: { is_completed: false },
      order: ['id'],
    });

    if (headerList.length === 0) return res.send('🤡🤡🤡');

    const header = headerList[0];

    if (!header.is_started) {
      await header.update({ start_time: new Date(), is_started: true });
      return res.send(`"${header.text}" - ${header.sender}`);
    }

    if (headerList.length === 1) {
      return res.send(`"${header.text}" - ${header.sender}`);
    }

    const secondsAgo = differenceInSeconds(new Date(), header.start_time);

    if (secondsAgo > process.env.HEADER_COOLDOWN) {
      await header.update({ is_completed: true });
      const nextHeader = headerList[1];
      return res.send(`"${nextHeader.text}" - ${nextHeader.sender}`);
    }

    return res.send(`"${header.text}" - ${header.sender}`);
  }

  async store(req, res) {
    const { text, sender } = req.query;

    const headerExists = await Header.findOne({
      where: { is_completed: false, sender: sender },
    });

    if (headerExists) {
      return res.send(
        `@${sender} Vc ja tem um header na fila. Use !header-edit se precisar editar :)`
      );
    }

    await Header.create({ text, sender });

    return res.send(`@${sender} header adicionado a !header-fila :)`);
  }

  async update(req, res) {
    const { text, sender } = req.query;

    const header = await Header.findOne({
      where: { is_completed: false, sender: sender },
    });

    if (!header) {
      return res.send(`@${sender} Vc não tem um header na fila`);
    }

    await header.update({ text });
    return res.send(`@${sender} editada com sucesso`);
  }
}

module.exports = new HeaderController();
