const router = require('express').Router();
const quotes = require('../quotes.json');


router.get('/', (req, res) => {
    res.status(200).json(quotes);
});


router.get('/random', (req, res) => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).json({ quote });
});




module.exports = router;