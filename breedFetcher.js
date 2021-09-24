const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, reponse, body) => {
    if (error) {
      callback(error, null);
      // console.log(`Error: ${error} OH NO!`);
      //return;
    } else if (reponse) {
    // console.log(body);
    // console.log(typeof body)
      const data = JSON.parse(body);
      console.log(null,data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };