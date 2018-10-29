const userInput = process.argv.slice(2)[0];
const requestOptions = {
	host: 'sytantris.github.io',
	path: '/http-examples/step2.html'
};
let url = '';

userInput == undefined ? url = requestOptions : url = userInput;  
dataBuffer = '';

const getHTML = require('./http-functions');


function printHTML (html) {
	console.log(html);
}

getHTML(url, printHTML);