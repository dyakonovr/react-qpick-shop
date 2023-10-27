import jwt from 'jsonwebtoken';

function checkRoleMiddleware(role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") next();

    try {
      const token = req.headers.authorization;
      if (!token) res.status(401).json({ message: "Не авторизован" });
      
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) res.status(403).json({ message: "Нет доступа" });
      
      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).json({ message: "Не авторизован" });
    }
  };
};

export default checkRoleMiddleware;