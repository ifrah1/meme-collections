const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for users
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        googleId: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema); 