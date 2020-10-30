const axios = require('axios');

const masteryApi = axios.create({
  baseURL: `https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner`,
  headers: { 'X-Riot-Token': `${process.env.RIOT_TOKEN}` },
});

module.exports = masteryApi;
