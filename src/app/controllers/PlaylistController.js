const seApi = require('../../services/se');

class PlaylistController {
  async show(req, res) {
    let { index } = req.query;
    const limit = 8;

    index = Number(index);
    if (!index) index = 1;

    try {
      const response = await seApi.get(
        `songrequest/${process.env.SE_CHANNEL}/history?limit=${limit}`
      );

      const { history } = response.data;

      const songs = history.map((song) => {
        const title = song.song.title;
        const slug = song.song.videoId;
        const user = song.song.user.username;
        return { title, slug, user };
      });

      if (index > limit || index < 1) {
        res.send('Essa música foi pro limbo. Chore se vc chorou :(');
      }
      const song = songs[index - 1];
      return res.send(
        `${song.title} pedida por @${song.user} - Link: https://youtu.be/${song.slug} 🐶`
      );
    } catch (error) {
      return res
        .status(500)
        .send('Amigão? O @ezrealblindado errou no código de novo 🤨');
    }
  }
}

module.exports = new PlaylistController();
