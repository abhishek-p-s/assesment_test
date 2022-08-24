var express = require('express');
const expressAsyncHandler = require('express-async-handler')
const multer = require('multer')
const Image = require('../model/imageModal.js');

var router = express.Router();


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

/* image adding */
router.get('/', function (req, res, next) {
    res.send("inside api route");
});

router.get(
    "/images",
    expressAsyncHandler(async (req, res) => {

        var data = await Image.find({});

        res.send(data);
    })
);

router.post('/add-image', upload.array('image', 6), expressAsyncHandler(async (req, res) => {
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + "/images/uploads/" + req.files[i].filename)
    }
    const newImage = new Image({
        name: req.body.name,
        image: reqFiles,
    });
    const createdImage = await newImage.save();
    res.status(200).send({ message: 'New data inserted', data: createdImage })
}))

module.exports = router;
