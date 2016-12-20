let fs 			= require('fs'),
	rp 			= require('request-promise'),
	credentials = require('./spotify-credentials'),
	base 		= 'https://api.spotify.com/v1';

module.exports = {
	getAlbum: function(albumUri) {
		return rp(`${base}/albums/${albumUri}`);
	},
	getAlbums: function(albumUris) {
		return rp(`${base}/artists?q=${albumUris.join(',')}`);
	},
	getAlbumTracks: function(albumUri) {
		return rp(`${base}/albums/${albumUri}/tracks`);
	},
	getArtist: function(artistUri) {
		return rp(`${base}/artists/${artistUri}`);
	},
	getArtists: function(artistUris) {
		return rp(`${base}/artists?q=${artistUri.join(',')}`);
	},
	getArtistAlbums: function(artistUri) {
		return rp(`${base}/artists/${artistUri}/albums?market=US`);
	},
	getArtistTopTracks: function(artistUri) {
		return rp(`${base}/artists/${artistUri}/top-tracks?country=US`);
	},
	getRelatedArtists: function(artistUri) {
		return rp(`${base}/artists/${artistUri}/related-artists`);
	},
	browseCategory: function(categoryId) {
		return rp({
			method: 'GET',
			uri: `${base}/browse/categories/${categoryId}?country=US`,
			headers: {
				'Authorization': `Bearer ${credentials.access_token}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
	},
	browseCategories: function() {
		return rp({
			method: 'GET',
			uri: `${base}/browse/categories?country=US`,
			headers: {
				'Authorization': `Bearer ${credentials.access_token}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
	},
	browseCategoryPlaylists: function(categoryId) {
		return rp({
			method: 'GET',
			uri: `${base}/browse/categories/${categoryId}/playlists?country=US`,
			headers: {
				'Authorization': `Bearer ${credentials.access_token}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
	},
	browseNewReleases: function() {
		return rp({
			method: 'GET',
			uri: `${base}/browse/new-releases?country=US`,
			headers: {
				'Authorization': `Bearer ${credentials.access_token}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
	},
	getTop: function(type) {
		type = type || 'artists';
		return rp({
			method: 'GET',
			uri: `${base}/me/top/${type}`,
			headers: {
				'Authorization': `Bearer ${credentials.access_token}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
	},
	getRecommendations: function(type, seed) {
		return rp({
			method: 'GET',
			uri: `${base}/recommendations?seed_${type}=${seed}`,
			headers: {
				'Authorization': `Bearer ${credentials.access_token}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
	},
	browsePlaylists: function() {
		return rp({
			method: 'GET',
			uri: `${base}/browse/featured-playlists?country=US`,
			headers: {
				'Authorization': `Bearer ${credentials.access_token}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
	},
	playlistTracks: function(userId, playlistId) {
		console.log(userId, playlistId);
		return rp({
			method: 'GET',
			uri: `${base}/users/${userId}/playlists/${playlistId}/tracks`,
			headers: {
				'Authorization': `Bearer ${credentials.access_token}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
	},
	refreshToken: function() {
		return rp({
			method: 'POST',
			uri: `https://accounts.spotify.com/api/token?grant_type=refresh_token&refresh_token=${credentials.refresh_token}`,
			headers: {
				'Authorization': 'Basic YTQ2Njg1ZGZmMmVjNDE5NTlkYTExN2EzOTljNWIzYWM6N2Q5MzAzODM2YzRmNGY5OGI1NzA1NzE0YTNmODEzYmQ',
				'Content-Type': 'application/x-www-form-urlencoded'

			}
		}).then(response => {
			let res = JSON.parse(response);
			console.log(res);
			credentials.update_access_token(res.access_token);
			return res;	
		});
	}
};