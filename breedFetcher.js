const request = require('request');
const args = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;

request(url, (error, reponse, body) => {
  if (error) {
    console.log(`Error: ${error} OH NO!`);
    return;
  }
  // console.log(body);
  // console.log(typeof body)
  const data = JSON.parse(body);
  console.log(data[0].description);
});

// Write code to output an appropriate message if the requested breed is not found.