const request = require('request');

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

const fetchBreedDescription = function(breedName, callback) {

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
};

module.exports = { fetchBreedDescription };