const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

const userSchema = new mongoose.Schema({
    FirstName: { type: String},
    LastName: { type: String},
    Username: { type: String},
    Password: { type: String},
    DOB: { type: Date },
    OrderHistory: {type: Array},
});

const User = mongoose.model('User', userSchema);

module.exports = User;