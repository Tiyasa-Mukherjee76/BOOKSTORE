const ex2 = require("express");
const jwt = require("jsonwebtoken");
const bc2 = require("bcryptjs");
const User = require("../models/User");
const r = ex2.Router();

r.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const u = new User({ email, password });
    await u.save();
    res.status(201).send("User registered");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

r.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const u = await User.findOne({ email });
  if (!u || !(await bc2.compare(password, u.password))) {
    return res.status(401).send("Invalid credentials");
  }
  const t = jwt.sign({ userId: u._id }, process.env.JWT_SECRET);
  res.json({ token: t });
});

module.exports = r;
