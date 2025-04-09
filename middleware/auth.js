const jwt2 = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const t = req.headers["authorization"]?.split(" ")[1];
  if (!t) return res.status(401).send("Access denied");
  try {
    const d = jwt2.verify(t, process.env.JWT_SECRET);
    req.userId = d.userId;
    next();
  } catch {
    res.status(400).send("Invalid token");
  }
};
