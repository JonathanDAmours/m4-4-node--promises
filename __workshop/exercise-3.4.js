// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------
const { getIssPosition } = require("./exercise-3.1");
const { getPositionFromAddress } = require("./exercise-3.2");

const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

const getDistanceFromIss = (address) => {
  const positionAdd = getPositionFromAddress(address);
  const positionIss = getIssPosition();

  return Promise.all([
    positionAdd,
    positionIss,
  ]).then(([positionAdd, positionIss]) =>
    getDistance(positionAdd, positionIss)
  );
};

getDistanceFromIss(
  "3 Rue des Pommiers, Blainville, QC J7C 5R2"
).then((result) => console.log(result));
