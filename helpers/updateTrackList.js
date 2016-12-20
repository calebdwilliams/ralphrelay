const mopidy = require('./mopidy');
const ralph = require('./connectToUI');
const { logError } = require('./errorHandlers');

module.exports = function updateTracklist() {
    return mopidy.tracklist.getTracks()
        .then(tracks => {
            if (tracks.length) {
                const firstTrack = tracks[0];
                return mopidy.library.findExact([{ uri: firstTrack.uri }])
                    .then(theTrack => {
                        const currentTrack = theTrack[0];

                        return mopidy.library.getImages([[currentTrack.uri]])
                            .then(images => {
                                const smallImage = images[currentTrack.uri][1];
                                currentTrack.images = smallImage;
                                tracks[0] = currentTrack;

                                console.log('tracklist updated');
                                ralph.emit('ralphMessage', {
                                    currentlyPlaying: tracks[0],
                                    queued: tracks.slice(1)
                                });
                            });
                    });
            }
        }).catch(logError);
};
