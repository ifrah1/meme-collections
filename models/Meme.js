const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for categories
const memeSchema = new Schema(
    {
        img: {
            data: Buffer,
            contentType: String,

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