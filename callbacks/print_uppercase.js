const userInput = process.argv.slice(2)[0];
const requestOptions = {
	host: 'sytantris.github.io',
	path: '/http-examples/step6/uppercase.html'
};
let url = '';

userInput == undefined ? url = requestOptions : url = userInput;  
let dataBuffer = '';

const getHTML = require('./http-functions');


function printHTMLUpperCase (html) {
	html = html.toUpperCase();
	console.log(html);
}

getHTML(url, printHTMLUpperCase);