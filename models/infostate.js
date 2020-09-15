// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Generating Schema
const InfoStateSchema = new Schema({
    stateinfo: String,
    restrictions: String,
    masks: String,
    href: String,
});


// Setting schema to variable
const InfoState = mongoose.model("InfoState", InfoStateSchema);
// Exporting
module.exports = InfoState;


