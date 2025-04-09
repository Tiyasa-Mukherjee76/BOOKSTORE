const ex3 = require("express");
const Book = require("../models/Book");
const r2 = ex3.Router();

r2.post("/", async (req, res) => {
  const b = new Book(req.body);
  await b.save();
  res.status(201).json(b);
});

r2.get("/", async (req, res) => {
  const bks = await Book.find();
  res.json(bks);
});

r2.get("/:id", async (req, res) => {
  const b = await Book.findById(req.params.id);
  res.json(b);
});

r2.put("/:id", async (req, res) => {
  const b = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(b);
});

r2.delete("/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

module.exports = r2;
