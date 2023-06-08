const fs = require('fs');
const request = require('request');


const input = process.argv.slice(2);
const inputURL = input[0];
const localFilePath = input[1];



request(inputURL, (error, response, body) => {
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err);
    }
  });
});

fs.stat(localFilePath, (error, stat) => {
  if (error) {
    console.error(err);
  }
  console.log(`Downloaded and saved ${stat.size} bytes to ${localFilePath}`);
});
