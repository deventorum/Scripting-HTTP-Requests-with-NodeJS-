const https = require('https');

function getAndPrintHTML () {

	const requestOptions = {
		host: 'sytantris.github.io',
		path: '/http-examples/step2.html'
	};
	let dataBuffer = '';

	https.get(requestOptions, function(response) {
		response.setEncoding('utf8');
		response.on('data', function(data) {
			dataBuffer += data;
		});
		response.on('end', function() {
			console.log(dataBuffer);
		});
	});

	/* Add your code here */

}

getAndPrintHTML();