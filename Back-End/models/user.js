const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    registerDate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("User", UserSchema);