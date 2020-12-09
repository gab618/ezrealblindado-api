const Header = require('../models/Header');
const { differenceInSeconds } = require('date-fns');

class HeaderController {
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
    if (secondsAgo > 600) {
      await header.update({ is_completed: true });
      const nextHeader = headerList[1];
      return res.send(`"${nextHeader.text}" - ${nextHeader.sender}`);
    }

    return res.send(`"${header.text}" - ${header.sender}`);
  }

  async update(req, res) {
    const secretPass = process.env.CREATE_URL_PASS;
    const { text, sender, pass } = req.query;

    if (!pass || pass !== secretPass) {
      return res.status(401).json({ error: 'Permission denied' });
    }

    const headerExists = await Header.findOne({
      where: { is_completed: false, sender: sender },
    });

    if (headerExists) {
      return res.send('Vc ja tem um header amigão');
    }

    await Header.create({ text, sender });

    return res.json(`@${sender} header adicionado a fila`);
  }
}

module.exports = new HeaderController();
