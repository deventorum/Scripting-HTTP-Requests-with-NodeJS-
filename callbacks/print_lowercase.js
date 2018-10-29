const userInput = process.argv.slice(2)[0];
const requestOptions = {
	host: 'sytantris.github.io',
	path: '/http-examples/step2.html'
};
let url = '';

userInput == undefined ? url = requestOptions : url = userInput;  
let dataBuffer = '';

const getHTML = require('./http-functions');


function printHTMLLowerCase (html) {
	html = html.toLowerCase();
	console.log(html);
}

getHTML(url, printHTMLLowerCase);