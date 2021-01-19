module.exports = (req, res, next) => {
  const secretPass = process.env.CREATE_URL_PASS;
  const { pass } = req.query;

  if (!pass || pass !== secretPass) {
    return res.status(401).send('Não autorizado');
  }
  return next();
};
