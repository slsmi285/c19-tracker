const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infostateSchema = new Schema({
    state: { type: [String], required: true },
    restrictions: { type: [String], required: true },
    masks: { type: [String], required: true },
    href: String,
});

const Infostate = mongoose.model("Infostate", infostateSchema);

module.exports = Infostate;