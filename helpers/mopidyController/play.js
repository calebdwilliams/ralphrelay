const play = require('./play');
const mopidy = require('../mopidy');
const errorHandler = require('../errorHandlers').logError;
const parseTrack = require('../parseTrack');
const trackDesc = require('../trackDesc');

module.exports = (request) => {
    mopidy.tracklist.clear();
    const track = [{
		__model__: 'Track',
		name: request.name,
		uri: request.uri
	}];

	return mopidy.tracklist.add([track])
		.then(result => {
			return mopidy.tracklist.getLength()
				.then(tracklistLength => {
					if (tracklistLength <= 1) {
						return mopidy.playback.play(result)
							.then(result => {
								return result;
							})
                            .catch(errorHandler);
					} else {
						return mopidy.tracklist.getTracks()
							.then(tracklist => console.log(tracklist))
                            .catch(errorHandler);
					}
				})
                .catch(errorHandler);

		});
}
