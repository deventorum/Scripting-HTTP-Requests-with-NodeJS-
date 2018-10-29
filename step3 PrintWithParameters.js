const userInput = process.argv.slice(2);
const https = require('https');


function getAndPrintHTML () {
	let theHost = '';
	let thePath = '';
	userInput[0] == undefined ? theHost = 'sytantris.github.io' : theHost = userInput[0]; 
	userInput[1] == undefined ? thePath = '/http-examples/step2.html' : thePath = userInput[1]; 
	const requestOptions = {
		host: theHost,
		path: thePath
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