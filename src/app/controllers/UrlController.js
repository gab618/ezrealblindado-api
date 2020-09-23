const Url = require('../models/Url');
const { nanoid } = require('nanoid');

class UrlController {
  async store(req, res) {
    const { url } = req.body;
    let slug = req.body.slug;

    if (!url) {
      return res.status(400).json({ error: 'Url must be provided' });
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
}

module.exports = new UrlController();
