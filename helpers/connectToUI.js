const io = require('socket.io-client');
const ralphUI = 'wss://ralphdj.herokuapp.com';
// const ralphUI = 'ws://localhost:5000';
const ralph = io(ralphUI);

ralph.on('connect', () => console.log('Successfully connected to RalphUI'));


module.exports = ralph;
