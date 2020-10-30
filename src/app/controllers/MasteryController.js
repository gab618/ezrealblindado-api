const api = require('../../services/api');
const NumAbbr = require('number-abbreviate');

const numAbbr = new NumAbbr(['k', 'kk', 'kkk', 'kkkk']);

class MasteryController {
  async show(req, res) {
    const account1 = await api.get(
      `${process.env.ACCOUNT_1_ID}/by-champion/81`
    );
    const account2 = await api.get(
      `${process.env.ACCOUNT_2_ID}/by-champion/81`
    );
    const account3 = await api.get(
      `${process.env.ACCOUNT_3_ID}/by-champion/81`
    );
    const { championPoints: mastery1 } = account1.data;
    const { championPoints: mastery2 } = account2.data;
    const { championPoints: mastery3 } = account3.data;
    const total = mastery1 + mastery2 + mastery3;

    const outputM1 = numAbbr.abbreviate(mastery1, 2);
    const outputM2 = numAbbr.abbreviate(mastery2, 0);
    const outputM3 = numAbbr.abbreviate(mastery3, 0);
    const outputTotal = numAbbr.abbreviate(total, 2);

    const output = `/me ———————————————————————Ezreal Blindado . . . . . . . . . . . . . . . . . . . . . ${outputM1} Ezreal top . . . . . . . . . . . . . . . . . . . . . . . . . . . ${outputM3} É o Blindas . . . . . . . . . . . . . . . . . . . . . . . . . . ${outputM2} Total: ${outputTotal} PogChamp ———————————————————————`;

    return res.send(output);
  }
}

module.exports = new MasteryController();
