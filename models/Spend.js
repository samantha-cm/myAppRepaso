const {model, Schema} = require("mongoose")

const spendSchema = new Schema({
  name: String,
  price: Number,
  image: String,
  description: String
})

module.exports = model("Spend", spendSchema)