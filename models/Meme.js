const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for categories
const memeSchema = new Schema(
    {
        filename: {
            type: String,
            unique: true,
            required: true
        },
        contentType: {
            type: String,
            required: true
        },
        imageBase64: {
            type: String,
            required: true
        },
        newFileName: {
            type: String,
            required: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Meme', memeSchema); 