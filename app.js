const request = require("request");
// const geocode = require("./utils/geocode.js");

const forecast = require("./utils/forecast.js");

// geocode("Boston", (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });

const city = process.argv[2];

if (!city) {
  return console.log("Please provide city!");
}

forecast(city, (error, data) => {
  console.log("error: " + error);
  console.log("data: " + data);
});
