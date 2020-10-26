// Exercise 1

// Write two functions that use Promises that you can chain!

// - The first function, `makeAllCaps()`, takes in an array of words, capitalizes them and returns a new array.
// - The second function, `sortWords()`, takes in an array of words, sorts the words in alphabetical order and return a new array.
// - If the array contains anything but strings, it should throw an error.

// ⚡ Be sure to take a look at how the functions are being called.

// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  const myPromise = new Promise((resolve, reject) => {
    if (array.every((word) => typeof word === "string")) {
      resolve(array.map((word) => word.toUpperCase()));
    } else {
      reject("All of the elements inside the array should be strings, error!");
    }
  });
  return myPromise;
};

const sortWords = (array) => {
  return array.sort();
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
