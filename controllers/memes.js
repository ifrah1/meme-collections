const { Category, Meme } = require('../models');
const fs = require('fs');

const showHome = (req, res) => {
    Category.find({})
        .sort('name')            //sorts ascending order 
        .exec((err, categories) => {
            // console.log(categories);
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

        res.render('meme/upload-hf', {
            user: req.user,
            category
        });
    });

}

// const addMeme = (req, res) => {
//     // console.log(req.params.id);
//     // console.log(req.user._id);
//     console.log(req.file);

//     //convert image into base64 encoding 
//     let img = fs.readFileSync(req.file.path);
//     let encode_image = img.toString('base64')

//     const obj = {
//         filename: req.file.originalname,
//         contentType: req.file.mimetype,
//         imageBase64: encode_image,
//         newFileName: req.file.filename,
//         category: req.params.id,
//         user: req.user._id
//     }
//     Meme.create(obj, (err, item) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             // item.save();
//             res.redirect(`/category/${req.params.id}`);      //main page for now
//         }
//     });
//     // res.redirect('/');
// }

const delImg = (req, res) => {
    Meme.findByIdAndRemove({ _id: req.params.id }, (err, meme) => {
        if (err) return console.log(err);
        console.log(meme.filename, meme.newFileName);

        //set path to delete file
        const path = './public/imgs-uploaded/' + meme.newFileName
        try {
            fs.unlinkSync(path)
            //file removed
        } catch (err) {
            console.error(err)
        }

        res.redirect(`/category/${meme.category}`);
    });
}

const addMeme = (req, res) => {
    // console.log(req.params.id);
    // console.log(req.user._id);
    console.log(req.body);

    const obj = {
        filename: req.body.name,
        contentType: "req.file.mimetype",
        imageBase64: "encode_image",
        newFileName: "req.file.filename",
        category: req.params.id,
        user: req.user._id
    }
    Meme.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect(`/category/${req.params.id}`);      //main page for now
        }
    });
    // res.redirect('/');
}

module.exports = {
    index: showHome,
    newMeme,
    addMeme,
    delImg
}