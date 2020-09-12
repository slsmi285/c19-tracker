const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelSchema = new Schema({
    state: { type: [String], required: true },
    restrictions: { type: [String], required: true },
    masks: { type: [String], required: true },
    href: String,
});

const Travel = mongoose.model("Travel", travelSchema);

module.exports = Travel;