const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rp = require('request-promise');
const btoa = require('btoa');
const app = express();
const expressWs = require('express-ws')(app);
const port = 3000;
const connection = require('./helpers/connection');
const redirect = 'http://localhost:8888/spotify';
const server = require('http').Server(app);
const socketController = require('./helpers/socket');
const spotify = require('./helpers/spotify');
// const ralph = require('./helpers/connectToUI');
const mopidyController = require('./helpers/mopidyController');
const Mopidy = require('mopidy');
const mopidy = new Mopidy({
    webSocketUrl: 'wss://localhost:6680/mopidy/ws/'
});

// // ralph.on('connection', () => console.log('data'));
// // socketController(ralph);
// //
// const ralphUI = 'wss://ralphdj.herokuapp.com/socket.io/?EIO=3&transport=websocket&sid=68Ll3T5-LZhU9G7AAAAA';
// const ralph = require('socket.io-client')(ralphUI);
//
// console.log(ralph)
// ralph.on('connect', () => console.log('Connected to RalphUI'));

// mopidy.tracklist.clear();
//

socketController()

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://ralphdj.heroku.com',
    credentials: true
}));
app.use((request, response, next) => {
    next();
});

app.listen(port);
console.log(`App is listening on port ${port} ...`);
