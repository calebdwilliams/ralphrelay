/**
 * @fileOverview - Creates mopidy singleton to be reused across API routes
 */

var Mopidy 	= require('mopidy'),
	mopidy 	= new Mopidy({
		webSocketUrl:  "ws://localhost:6680/mopidy/ws/",
    	callingConvention: "by-position-or-by-name"
	});

mopidy.on('state:online', () => console.log('\nConnected to Mopidy:'));

module.exports = mopidy;
