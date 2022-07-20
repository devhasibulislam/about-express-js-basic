/**
 * ---------------------
 * file uploading scheme
 * ---------------------
 */

const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// define upload directory
const UPLOAD_DIR = './uploads/';

// define the storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOAD_DIR);
    },
    filename: (req, file, cb) => {
        const fileNameWithExtension = path.extname(file.originalname);
        const fileNameWithoutExtension = file.originalname.replace(fileNameWithExtension, '').toLowerCase().split(' ').join('_') + '-' + Date.now();
        const fileName = fileNameWithoutExtension + fileNameWithExtension;
        cb(null, fileName);
    }
});

// prepare multer upload object
const upload = multer({
    // dest: storage,
    storage: storage,
    limits: {

        fileSize: 5000000 // 5mb
    },
    fileFilter: (req, file, cb) => {
        // console.log(file);
        if (file.fieldname === 'avatar') {
            if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
                cb(null, true);
            } else {
                cb(new Error('only png or jpg or jpeg extension based file allow!!!'));
            }
        } else if (file.fieldname === 'document') {
            if (file.mimetype === 'application/pdf') {
                cb(null, true);
            } else {
                cb(new Error('only pdf extension based file allow!!!'));
            }
        } else {
            cb(new Error('there\'s an upload error!!!'));
        }
    }
});


// application route with middleware
// app.post('/', upload.single("avatar"), (req, res) => {
// app.post('/', upload.array("avatar", 3), (req, res) => {
// app.post('/', upload.fields([
//     {
//         name: 'avatar',
//         maxCount: 1
//     },
//     {
//         name: 'gallery',
//         maxCount: 3
//     }
// ]), (req, res) => {
// app.post('/', upload.none(), (req, res) => {
// app.post('/', upload.single("document"), (req, res) => {
app.post('/', upload.fields([
    {
        name: 'avatar',
        maxCount: 1
    },
    {
        name: 'document',
        maxCount: 1
    }
]), (req, res) => {
    console.log(req.files);
    res.send(`TYSM, file upload success!!!`);
})

// default error handler
app.use((err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(500).send('there\'s an error in server-side!!!');
        } else {
            res.status(500).send(err.message)
        }
    } else {
        res.status(200).send('upload success!!!');
    }
})

app.listen(3000, () => {
    console.log('listening on port 3000!!!');
})