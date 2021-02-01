const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for users
const userSchema = new Schema(
    {
        fName: {
            type: String,
            required: true
        },
        lName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema); 