const mopidy = require('../mopidy');
const ralph = require('../connectToUI');
const { logError } = require('../errorHandlers');

module.exports = request => {
    ralph.emit('message', { status: status });
};
