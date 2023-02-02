const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const groceryListsSchema = new Schema({
  name: { type: String, required: true },
  products: [
    { name: { type: String, required: true } },
    { category: [{ type: String, required: true }] },
    { isMarked: { type: Boolean, default: false } },
    { isFavorit: { type: Boolean, default: false } },
  ],
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },

  grocery_lists: [
    { type: mongoose.Types.ObjectId, required: true, ref: "Company" },
    { isMarked: { type: String, default: false } },
  ],
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("groceryLists", groceryListsSchema);
