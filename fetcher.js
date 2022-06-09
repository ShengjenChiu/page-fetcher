const args = process.argv;
const arg = args.slice(2, 4);
const request = require('request');
const fs = require('fs');

let domain = arg[0];
let filePath = arg[1];
let content = '';
let fileSize = 0;

request(domain, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  content = body; // Print the HTML for requested page
  fileSize = content.length; // the number of bytes

  fs.writeFile(filePath, content, err => {
    if (err) {
      console.log(err);
    }
    console.log(`Downloaded and saved ${fileSize} bytes to ./index.html`);
  });

});
