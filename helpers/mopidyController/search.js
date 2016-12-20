const mopidy = require('../mopidy');
const errorHandler = require('../errorHandlers').logError;

module.exports = (request) => {
    return mopidy.library.search({
        any: request.query.query
    }).then(result => {
        const images = [];
        const artists = [];

        for (let album in result[0].albums) {
            images.push(result[0].albums[album].uri);
        }

        for (let artist in result[0].artists) {
            images.push(result[0].artists[artist].uri);
        }

        return mopidy.library.getImages([images]).then(withImages => {
            for (let album in result[0].albums) {
				result[0].albums[album].images = withImages[result[0].albums[album].uri];
			}
			for (let artist in result[0].artists) {
				result[0].artists[artist].images = withImages[result[0].artists[artist].uri];
			}
			return result;
        });
    });
};


// module.exports = function(request, response) {
//     console.log(request.query)
// 	if (request.query.query == 'nickelback') {
// 		request.query.query = 'rick astley';
// 	}
// 	mopidy.library.search({
// 		any: [request.query.query]
// 	}).then(result => {
// 		let images = [],
// 			artists = [];
//
// 		for (let album in result[0].albums) {
// 			images.push(result[0].albums[album].uri);
// 		}
//
// 		for (let artist in result[0].artists) {
// 			images.push(result[0].artists[artist].uri);
// 		}
// 		// images.push(...artists);
// 		console.log(images)
// 		mopidy.library.getImages([images]).then(withImages => {
// 			for (let album in result[0].albums) {
// 				result[0].albums[album].images = withImages[result[0].albums[album].uri];
// 			}
// 			for (let artist in result[0].artists) {
// 				result[0].artists[artist].images = withImages[result[0].artists[artist].uri];
// 			}
// 			response.json(result);
// 		});
// 	});
// };
