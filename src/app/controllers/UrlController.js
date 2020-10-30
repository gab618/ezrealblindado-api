const Url = require('../models/Url');
const { nanoid } = require('nanoid');

class UrlController {
  async store(req, res) {
    const secretPass = process.env.CREATE_URL_PASS;
    const { url, pass } = req.body;
    let slug = req.body.slug;

    if (!url) {
      return res.status(400).json({ error: 'Url must be provided' });
    }

    if (!pass || pass !== secretPass) {
      return res.status(401).json({ error: 'Permission denied' });
    }

    if (!slug) {
      slug = nanoid(5).toLowerCase();
    }

    const slugExists = await Url.findOne({ where: { slug } });
    console.log(slugExists);
    if (slugExists) {
      return res.status(400).json({ error: 'Slug already in use' });
    }

    const { id } = await Url.create({ url, slug });

    return res.json({ id, url, slug });
  }

  async show(req, res) {
    const { id: slug } = req.params;
    const url = await Url.findOne({ where: { slug } });

    if (!url) {
      return res.status(404).json({ error: 'Url not found' });
    }
    res.redirect(url.url);
  }
}

module.exports = new UrlController();
