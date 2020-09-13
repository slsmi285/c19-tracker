const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");//hashing the passwords

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

UserSchema.pre('save', async function(next) {
    var user = this;

    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    console.log(user.password, hashedPassword);

    next();
});

module.exports = mongoose.model("User", UserSchema);