const request = require("request");

const forecast = (address, callback) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=1a2538ca881e4815b8d105155241006&q=${address}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("some network issue", undefined);
    } else if (body.error) {
      callback(body.error.message, undefined);
    } else {
      const data = body.current;
      callback(
        undefined,
        `It is currently ${data.temp_c} out.It feels like ${data.feelslike_c} out.`
      );
    }
  });
};

module.exports = forecast;
