// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: "39f89d5e48d144d9b17d9228dbb4c2ab",
    q: address,
  };

  return opencage.geocode(requestObj).then((data) => {
    return data.results[0].geometry;
  });
};

getPositionFromAddress(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((response) => console.log(response));

getPositionFromAddress(
  "1653 Rue Beaudry, Montréal, QC H2L 3E8"
).then((response) => console.log(response));

module.exports = { getPositionFromAddress };
