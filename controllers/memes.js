const { Category, Meme } = require('../models');
const fs = require('fs');

const showHome = (req, res) => {
    Category.find({})
        .sort('name')            //sorts ascending order 
        .exec((err, categories) => {
            console.log(categories);
            res.render('index', {
                user: req.user,
                categories
            });
        });
}

const newMeme = (req, res) => {
    // console.log(req.user);
    Category.findById({ _id: req.params.id }, (err, category) => {
        if (err) return console.log(err);

        res.render('meme/upload', {
            user: req.user,
            category
        });
    });

}

const addMeme = (req, res) => {
    // console.log(req.params.id);
    // console.log(req.user._id);
    console.log(req.file);

    //convert image into base64 encoding 
    let img = fs.readFileSync(req.file.path);
    let encode_image = img.toString('base64')

    const obj = {
        filename: req.file.originalname,
        contentType: req.file.mimetype,
        imageBase64: encode_image,
        category: req.params.id,
        user: req.user._id
    }
    Meme.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/memes');      //main page for now
        }
    });
    // res.redirect('/');
}

module.exports = {
    index: showHome,
    newMeme,
    addMeme
}