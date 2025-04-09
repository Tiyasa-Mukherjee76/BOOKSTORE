const ex4 = require("express");
const User2 = require("../models/User");
const Book2 = require("../models/Book");
const r3 = ex4.Router();

r3.post("/:bookId", async (req, res) => {
  const u = await User2.findById(req.userId);
  const b = await Book2.findById(req.params.bookId);
  if (!b) return res.status(404).send("Book not found");
  u.purchases.push(b._id);
  await u.save();
  res.send("Purchase successful");
});

r3.get("/history", async (req, res) => {
  const u = await User2.findById(req.userId).populate("purchases");
  res.json(u.purchases);
});

module.exports = r3;
