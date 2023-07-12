import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Pas de Token' });
    }
  
    jwt.verify(token, 'secretKey', (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Token invalide' });
      }
  
      req.user = decoded.username;
      next();
    });
};

export default verifyToken