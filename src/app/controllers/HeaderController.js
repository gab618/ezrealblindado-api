const Header = require('../models/Header');

class HeaderController {
  async show(req, res) {
    const header = await Header.findOne();
    if (header) {
      return res.send(header.text);
    }
    return res.send('🤡🤡🤡🤡🤡🤡🤡');
  }

  async update(req, res) {
    const secretPass = process.env.CREATE_URL_PASS;
    const { msg, sender, pass } = req.query;

    if (!pass || pass !== secretPass) {
      return res.status(401).json({ error: 'Permission denied' });
    }

    const text = `${msg} - ${sender}`;

    const header = await Header.findOne();
    if (!header) {
      await Header.create({ text });
      return res.send('ok');
    }

    await header.update({ text });

    return res.json(header);
  }
}

module.exports = new HeaderController();
