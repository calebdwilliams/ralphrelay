let SpotifyWebApi = require('spotify-web-api-node'),
	clientId			= 'a46685dff2ec41959da117a399c5b3ac',
	secret				= '7d9303836c4f4f98b5705714a3f813bd',
	redirect			= 'http://localhost:5000/spotify',
	spotifyApi = new SpotifyWebApi({
		clientId: clientId,
		clientSecret: secret,
		redirectUri: redirect
	});

console.log(spotifyApi);