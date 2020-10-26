// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = () => {
  return request(`http://api.open-notify.org/iss-now.json`)
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return {
        lat: parsedResponse.iss_position.latitude,
        lng: parsedResponse.iss_position.longitude,
      };
    });
};

// 1. Complete the code of this function so that it returns the position of the ISS as a `Promise`.
// 2. Use the data from `http://api.open-notify.org/iss-now.json` to do your work. This API endpoint returns a JSON object, like the one you see when you open the link.
// 3. The ISS API returns the position keys as `latitude` and `longitude`. Return them as `lat` and `lng` instead.
// 4. Don't forget to `require` the module you need (`request-promise`). _See a previous exercise, if you aren't sure._

getIssPosition().then((results) => console.log(results));

module.exports = { getIssPosition };
