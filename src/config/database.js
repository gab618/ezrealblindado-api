module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker123',
  database: 'urlshortener',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
