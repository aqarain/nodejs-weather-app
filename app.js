const axios = require("axios");

const WEATHER_STACK_API_KEY = "368ac056bbe1cbd650c131592b509529";
const MAP_BOX_API_KEY =
  "pk.eyJ1IjoiYXFhcmFpbjkyIiwiYSI6ImNraWpiYzlxajAxMzgyeXAyZGd6dDFyNHkifQ.WannHpd1JXi8MVAUtABOcw";

// axios
//   .get(
//     `http://api.weatherstack.com/current?access_key=${WEATHER_STACK_API_KEY}&query=31.5204,74.3587&units=f`
//   )
//   .then(response => {
//     if ("error" in response.data) {
//       console.log(response.data.error.info);
//     } else {
//       const {
//         temperature,
//         feelslike,
//         weather_descriptions
//       } = response.data.current;
//       console.log(
//         `${weather_descriptions}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`
//       );
//     }
//   })
//   .catch(error => {
//     console.log("Unable to connect to the Weather Stack service");
//   });

axios
  .get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/Lahore.json?access_token=${MAP_BOX_API_KEY}&limit=1`
  )
  .then(response => {
    if (response.data.features.length === 0) {
      console.log("Unable to find location. Try another search.");
    } else {
      const [{ center }] = response.data.features;
      console.log(`Latitude: ${center[0]} Longitude: ${center[1]}`);
    }
  })
  .catch(error => {
    console.log(error);
    console.log("Unable to connect to the location service");
  });
