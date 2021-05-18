// const quotes = require('./quotes.json');

const express = require('express');
const http = require('http');
const helmet = require('helmet');
const cors = require('cors');
const hello = require('./routes/routes');
const app = express();
const server = http.createServer(app);

const apiRoutes = require('./routes/apiRoutes')

app.use(helmet());
app.use(cors());

app.use((req, res, next) => {
    console.log('hello world')
    next();
});

app.use((err, req, res, next) => {
    console.log('Error!!', err.message);
    res.send(500).json({ error: err.message })
    

})

app.use('/hello', hello);
app.use('/api/v1/', apiRoutes);

 
server.listen(process.env.PORT || 3000)