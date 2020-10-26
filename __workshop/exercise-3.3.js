// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const getAddressFromPosition = (lat, lng) => {
  const requestObj = {
    key: "39f89d5e48d144d9b17d9228dbb4c2ab",
    q: `${lat}, ${lng}`,
  };

  return opencage.geocode(requestObj);
};

getAddressFromPosition("48.8584", "2.2945").then((response) =>
  console.log(response.results[0].formatted)
);

module.exports = { getAddressFromPosition };
