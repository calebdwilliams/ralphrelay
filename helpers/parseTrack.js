module.exports = function parseTrack(trackUri) {
	if (trackUri.split(':').length === 2) {
		return trackUri;
	} else {
		return `spotify:track:${trackUri}`;
	}
};
