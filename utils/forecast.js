const axios = require("axios");

const WEATHER_STACK_API_KEY = "368ac056bbe1cbd650c131592b509529";

const forecast = (lon, lat, cb) => {
  axios
    .get(
      `http://api.weatherstack.com/current?access_key=${WEATHER_STACK_API_KEY}&query=${lat},${lon}`
    )
    .then(response => {
      if ("error" in response.data) {
        cb(response.data.error.info);
      } else {
        const {
          temperature,
          feelslike,
          weather_descriptions
        } = response.data.current;
        cb(
          null,
          `${weather_descriptions}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`
        );
      }
    })
    .catch(error => {
      cb("Unable to connect to the Weather Stack service");
    });
};

module.exports = forecast;
