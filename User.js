const mg2 = require("mongoose");
const bc = require("bcryptjs");

const uSchema = new mg2.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  purchases: [{ type: mg2.Schema.Types.ObjectId, ref: "Book" }],
});

uSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bc.hash(this.password, 10);
  }
});

module.exports = mg2.model("User", uSchema);
