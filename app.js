const express = require("express")
const path = require('path')
const axios = require('axios').default


const app = express()

app.use(express.json())
app.set

axios
  .get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      lat: 14.6147396,
      lon: 0.9445775,
      appid: "e9644f71bb295f373795aecac30f165e",
    },
  })
  .then((response) => {
    console.log(response.data.weather);
    // return response.weather
  })
  .catch((error) => {
    console.log(error);
  });
axios
  .get("http://api.openweathermap.org/geo/1.0/direct", {
    params: {
      q: "Abuja",
      limit: 2,
      appid: "e9644f71bb295f373795aecac30f165e",
    },
  })
  .then((response) => {
    console.log(response.data);
    // return response.weather
  })
  .catch((error) => {
    console.log(error);
  });

