let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL = require('@slappforge/slappforge-sdk');
const rds = new SL.AWS.RDS(connectionManager);
exports.handler = function (event, context, callback) {

    let results;
	// Replace the query with the actual query
	// You can pass the existing connection to this function.
	// A new connection will be created if it's not present as the third param 
	// You must always end the DB connection after it's used
	rds.query({
		instanceIdentifier: 'mobilebackend',
		query: 'SELECT * FROM users',
		inserts: ["randikanavagamuwa@gmail.com", "password"]
	}, function (error, results, connection) {
		if (error) {
			results = error;
			throw error;
		} else {
			results = "Failed to process"
			console.log(results);
		}

		connection.end();
	});


	callback(null, results);
}