let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL = require('@slappforge/slappforge-sdk');
const rds = new SL.AWS.RDS(connectionManager);
exports.handler = function (event, context, callback) {

	// Replace the query with the actual query
	// You can pass the existing connection to this function.
	// A new connection will be created if it's not present as the third param 
	// You must always end the DB connection after it's used
	rds.query({
		instanceIdentifier: 'mobileBackend',
		query: 'INSERT INTO users (Email, Password, LastName, FirstName, Address) VALUES (?, ?, ?, ?, ?);',
		inserts: ["randikanavagamuwa@gmail.com", "password", "Navagamuwa", "Randika", "Colombo"]
	}, function (error, results, connection) {
		if (error) {
			console.log("Error occurred");
			throw error;
		} else {
			console.log("Success")
			console.log(results);
		}

		connection.end();
	});


	callback(null, 'Successfully executed');
}













