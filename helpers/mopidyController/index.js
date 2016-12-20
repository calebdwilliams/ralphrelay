const mopidy = require('../mopidy');
const updateTracklist = require('../updateTrackList');

const play = require('./play');
const search = require('./search');
const updateStatus = require('./updateStatus');


// mopidy.playback.getState().then(status => {
// 	ws.emit('ralphMessage', { status: status });
// }, logError);

module.exports = {
    play, updateStatus, search
};
