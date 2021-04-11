const { decryptedToken } = require('../../utils/token');

const verifyJwt = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Unset token!' });
  }

  try {
    await decryptedToken(authHeader);
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized!' });
  }
};

module.exports = verifyJwt;
