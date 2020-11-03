const seApi = require('../../services/se');

class PointsController {
  async update(req, res) {
    const secretPass = process.env.CREATE_URL_PASS;
    const { user, points, pass } = req.body;

    if (!pass || pass !== secretPass) {
      return res.status(401).json({ error: 'Permission denied' });
    }

    try {
      await seApi.put(`${user}/${points}`);
    } catch (error) {
      return res.status(500).json({ error: 'Request error' });
    }

    return res.json({ user, points });
  }
}

module.exports = new PointsController();
