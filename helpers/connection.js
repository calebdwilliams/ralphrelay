let MongoClient = require('mongodb').MongoClient,
	ObjectId 	= require('mongodb').ObjectId,
	mongoPort 	= 27017,
	dbhost 		= `mongodb://localhost:${mongoPort}/ralph`,
	collection 	= 'credentials';

module.exports = {
	getCredentials: function() {
		MongoClient.connect(dbhost, (error, db) => {
			error ? console.log(error) : null;
			console.log('Connected to MongoDB ... ');
			db.collection(collection).find({ }).toArray((err, docs) => {
				err ? console.log(err) : console.log('MongoDB: Query successful ...');
				console.log(docs);
			});
		});
	}
};