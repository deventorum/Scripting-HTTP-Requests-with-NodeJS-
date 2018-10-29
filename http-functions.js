module.exports = function getHTML (options, callback) {
	
	const https = require('https');
	let dataBuffer = '';
	
	https.get(options, function(response) {
		response.setEncoding('utf-8');
		response.on('data', function(data) {
			dataBuffer += data;
		});
		response.on('end', function() {
			callback(dataBuffer);
		});
	});

};
