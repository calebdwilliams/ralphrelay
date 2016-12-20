module.exports = function trackDesc(track) {
    return track.name + " by " + track.artists[0].name +
        " from " + track.album.name;
};
