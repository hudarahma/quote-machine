const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();


router.get('/', (req, res, next) => {
   // fs.readFile //callback   fs.readFileSync // No callback
//    return next(new Error('it broke'))
    fs.readFile(path.join(__dirname, "../index.html" ), { encoding: 'utf8' }, (err, data) => {
        if(err) next(err);
        res.status(200).send(data);
    });
})


module.exports = router;