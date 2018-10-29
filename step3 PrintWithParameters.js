const userInput = process.argv.slice(2)[0];
const https = require('https');


function getAndPrintHTML () {
	let url = '';
	const requestOptions = {
		host: 'sytantris.github.io',
		path: '/http-examples/step2.html'
	};
  
	userInput == undefined ? url = requestOptions : url = userInput;  
	let dataBuffer = '';

	https.get(url, function(response) {
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