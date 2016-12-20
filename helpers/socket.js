const mopidy = require('./mopidy');
const ralph = require('./connectToUI');
const mopidyController = require('./mopidyController');
const updateTracklist = require('./updateTrackList');
const logError = require('./errorHandlers').logError;

module.exports = function(ws) {
	// console.log(ralph.connect())
	ralph.on('connect', () => console.log('Connected to RalphUI'));
console.log('\n\n\n\n\n', ralph.connected, '\n\n\n\n\n');
	ralph.on('message', message => {socketController(message); console.log(message)});

	/**
	 * When play event is received, use mopidyController.play
	 * then forward the response
	 * @type {[type]}
	 */
	ralph.on('play', track => {
	    mopidyController.play(track)
	        .then(response => {console.log('response', response); ralph.emit('ralphPlay', response)});
	});

	ralph.on('search', data => {
		mopidyController.search(data)
			.then(response => ralph.emit('ralphSearch', response));
	});

	mopidy.on('event:tracklistChanged', () => updateTracklist());

	mopidy.on('event:playbackStateChanged', event => {
		console.log('\n\n\nvvv\n', event, '\n^^^\n\n\n');
		ralph.emit('ralphMessage');
	});
	// mopidy.playback.getState().then(status => {
	// 	ws.emit('message', { status });
	// });
	// mopidy.on(function(event) {
	// 	console.log(event);
	// });
	//
	// console.log(`WebSocket connection ...`);
	//
	// mopidy.on('event:tracklistChanged', event => {
	// 	updateTracklist();
	// });
	//
	// mopidy.on('event:trackPlaybackEnded', event => {
	// 	mopidy.tracklist.remove({ uri: [event.tl_track.track.uri] })
	// 		.then(success => {
	// 			console.log(`${event.tl_track.track.name} finished`);
	// 			updateTracklist();
	// 		});
	// });
	//
	// mopidy.on('event:trackPlaybackStarted', event => {
	// 	mopidy.library.findExact({ uri: [event.tl_track.track.uri] }).then(theTrack => {
	// 		let currentTrack = theTrack[0].tracks[0];
	//
	// 		mopidy.library.getImages([currentTrack.uri]).then(images => {
	// 			let smallImage 		= images[currentTrack.uri][1];
	// 			currentTrack.image 	= smallImage;
	//
	// 			ws.emit('message', {
	// 				currentlyPlaying: currentTrack
	// 			});
	//
	// 		}, logError);
	// 	}, logError);
	// });
	//
	// mopidy.playback.getState().then(status => {
	// 	ws.emit('message', { status: status });
	// }, logError);
	//
	// ws.on('message', message => {
	// 	console.log(message);
	// 	if (message.setStatus === 'pause') {
	// 		mopidy.playback.pause().then(event => console.log(event), logError);
	// 	} else if (message.setStatus === 'play') {
	// 		mopidy.playback.resume().then(event => console.log(event), logError);
	// 	}
	// });
	//
	// mopidy.on('event:playbackStateChanged', event => {
	// 	ws.emit('message', event);
	// });
	//
	// ws.emit('message', { hello: 'world' });
	//
	// updateTracklist();
	// // mopidy.tracklist.clear()
};

// Adult Mom
// Car Seat Head Rest
