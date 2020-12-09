const Header = require('../models/Header');

class HeaderController {
  async show(req, res) {
    const headerList = await Header.findAll({ where: { is_completed: false } });

    if (headerList.length === 0) return res.send('🤡🤡🤡');

    if (headerList.length === 1) {
      if (!headerList[0].start_time) {
        console.log('criando start_time...');
        await headerList[0].update({ start_time: new Date() });
      }
      await headerList[0].update({ is_started: true });
      return res.send(`"${headerList[0].text}" - ${headerList[0].sender}`);
    }

    return res.send('todo');
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
