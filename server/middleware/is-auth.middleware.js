import jwt from "jsonwebtoken";

export function isAuthMiddleware (req, res, next) {
  if (req.method === "OPTIONS") next();

  try {
    const token = req.headers.authorization.split(' ')[1]; // Удаляю Bearer
    if (!token) res.status(401).json({ message: "Не авторизован" });
    
    const decodedUser = jwt.verify(token, process.env.SECRET_KEY);
    // const userInDatabase = await User.findByPk(decodedUser.id);
    // if (!userInDatabase) res.status(500).json({ message: "Аккаунт деактивирован" });

    req.user = decodedUser;
    next();
  } catch (e) {
    res.status(401).json({ message: "Не авторизован" });
  }
}