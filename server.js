require("dotenv").config();
const ex = require("express");
const mg = require("mongoose");
const aRt = require("./routes/auth");
const bRt = require("./routes/books");
const pRt = require("./routes/purchase");
const aMw = require("./middlewares/auth");
const path = require("path");

const app = ex();
app.use(ex.json());

app.use("/api/auth", aRt);
app.use("/api/books", aMw, bRt);
app.use("/api/purchase", aMw, pRt);

const PORT = process.env.PORT || 5000;

mg.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log("Project directory:", path.resolve("."));
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
