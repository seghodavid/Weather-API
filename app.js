require('dotenv').config()
const express = require("express")
const path = require('path')
const axios = require('axios').default



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))



// axios
//   .get("https://api.openweathermap.org/data/2.5/weather", {
//     params: {
//       lat: 14.6147396,
//       lon: 0.9445775,
//       appid: "",
//     },
//   })
//   .then((response) => {
//     console.log(response.data.weather);
//     // return response.weather
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// axios
//   .get("http://api.openweathermap.org/geo/1.0/direct", {
//     params: {
//       q: "Abuja",
//       limit: 2,
//       appid: "",
//     },
//   })
//   .then((response) => {
//     console.log(response.data);
//     // return response.weather
//   })
//   .catch((error) => {
//     console.log(error);
//   });
const PORT = 8080 || process.env.PORT
const start = () => {
    app.listen(PORT, ()=> console.log(`Server is running...`))
}

start()