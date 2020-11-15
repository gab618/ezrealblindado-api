const axios = require('axios');

const seApi = axios.create({
  baseURL: `https://api.streamelements.com/kappa/v2`,
  headers: {
    accept: 'application/json',
    'content-type': 'Content-Type',
    authorization: `Bearer ${process.env.SE_TOKEN}`,
  },
});

module.exports = seApi;
