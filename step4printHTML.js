
const userInput = process.argv.slice(2)[0];
const https = require('https');
let dataBuffer = '';
const requestOptions = {
	host: 'sytantris.github.io',
	path: '/http-examples/step2.html'
};
let url = '';
  
userInput == undefined ? url = requestOptions : url = userInput;  
dataBuffer = '';

function getHTML (options, callback) {

	/* Add your code here */
	https.get(options, function(response) {
		response.setEncoding('utf-8');
		response.on('data', function(data) {
			dataBuffer += data;
		});
		response.on('end', function() {
			callback(dataBuffer);
		});
	});

}


function printHTML (html) {
	console.log(html);
}

getHTML(url, printHTML);