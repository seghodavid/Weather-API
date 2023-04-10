require('dotenv').config()
const express = require("express")
const path = require('path')
const axios = require('axios').default
const helmet = require('helmet')
const morgan = require('morgan')
const redis = require('redis')



const app = express()
const REDIS_PORT = "127.0.0.1:6379";
// const client =  redis.createClient({
//   legacyMode: true,
//   PORT: REDIS_PORT
// })
// client.connect().catch(console.error)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(helmet());
// app.use(morgan("dev"));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')))



const getDate = () => {
    const d = new Date()

    const year = d.getFullYear();
    const day = d.toLocaleString("en-us", { weekday: "long" });
    const date = d.getDate();
    const month = d.getMonth() + 1;

    const data = {
      year,
      day,
      date,
      month,
    };

    return data
}


app.get('/', (req,res,next) => {
 const data = getDate()
    res.render('index', {
        data: data
    })
})

app.post('/weather', (req, res, next) => {
  const city = req.body.city;
  const appID = process.env.OPENWEATHER_APPID;

  const data = getDate()

  axios
    .get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: city,
        appid: appID,
        units: 'metric'
      },
    })
    .then((response) => {
        // client.setEx("weather", 3600, response)
        const temp = Math.floor(response.data.main.temp)
        const weather = response.data.weather[0].main
        const weatherData = {
            city,
            temp,
            weather
        }
      res.render('weather', {
        weatherData,
        data
      })
    })
    .catch((error) => {
      console.log(error);
    });
})


app.get("/weather", (req, res, next) => {
  const data = getDate();
  res.render("weather", {
    data: data,
  });
});
// const getCachedData = () => {
//     client.get('weather', (err, data) => {
//         if (data !== null) {
//             return data
//         }
//         console.error(err)
//     })
// }

// getCachedData()

const PORT = 8080 || process.env.PORT
const start = () => {
    app.listen(PORT, ()=> console.log(`Server is running...`))
}


start()