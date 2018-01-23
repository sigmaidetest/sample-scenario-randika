let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL = require('@slappforge/slappforge-sdk');
const rds = new SL.AWS.RDS(connectionManager);
exports.handler = function (event, context, callback) {

    let response;
	// Replace the query with the actual query
	// You can pass the existing connection to this function.
	// A new connection will be created if it's not present as the third param 
	// You must always end the DB connection after it's used
	rds.query({
		instanceIdentifier: 'mobileBackend',
		query: 'SELECT * FROM users',
		inserts: [event.email, event.password]
	}, function (error, results, connection) {
		if (error) {
			response = error;
			throw error;
		} else {
			response = results;
			console.log(response);
		}

		connection.end();
	});


	callback(null, response);
}