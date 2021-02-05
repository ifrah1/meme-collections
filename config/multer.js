const multer = require('multer');

/* Setup multer for storing uploaded files */
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/imgs-uploaded')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + "_" + file.originalname)
    }
});
let upload = multer({ storage: storage });


module.exports = upload;