let connection = require('./connection');

class Track {
	constructor(track, addedBy) {
		this.track = track;
		this.addedBy = addedBy;
		this.addedOn = Date.now();

		// add to MongoDB
	}

	playbackComplete() {
		// remove from Mongo
	}
}

module.exports = Track;


