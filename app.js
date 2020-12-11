const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Lahore", (error, geocodeData) => {
  if (error) return console.log(`Error: ${error}`);
  forecast(
    geocodeData.longitude,
    geocodeData.latitude,
    (error, forecastData) => {
      if (error) return console.log("Error", error);
      console.log(geocodeData.location);
      console.log(forecastData);
    }
  );
});
