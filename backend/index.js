const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Pragma');
    res.header('Access-Control-Expose-Headers', 'Content-Disposition');
    next();
});

app.use('/api', require('./routes.js'));

const server = http.listen(8000, () => console.log('Node listening at port 8000'));