const bSchema = new mg2.Schema({
    title: String,
    author: String,
    price: Number,
    description: String,
  });
  
  module.exports = mg2.model("Book", bSchema);
  
