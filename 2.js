const data = require('./data.js')
const { map, filter, reduce, compose, take, contains } = require('ramda')

// When where there be a chance of rain this weekend?

// Return a simplified hourly forecast where the weekend calls for rain or a chance of rain.
// Each object in the returned array should include the following forecast infomation:
  //  day of the week (Ex: 'Friday')
  //  time and date
  //  temperature in fahrenheit
  //  weather condition (ex: 'Rain')

//SAVE
//isweekend working ... filter(o=>o.FCTTIME.weekday_name === "Saturday" || o.FCTTIME.weekday_name === "Sunday")

// Your code goes here.
const simpleForecast = function (o) {
  return {Day: o.FCTTIME.weekday_name, TimeAndDate: o.FCTTIME.pretty, Temperature: o.temp.english, WeatherCondition: o.condition}
}

var result = compose (
    map(simpleForecast),
    filter(o=>contains("rain", o.condition.toLowerCase())),
    //filter(o=>o.FCTTIME.weekday_name === "Saturday" || o.FCTTIME.weekday_name === "Sunday")
    filter(o=>o.FCTTIME.month_name === "February" && o.FCTTIME.mday === "18" || o.FCTTIME.mday === "19")
    // filter(o=>contains(["February 19", "February 20"], o.FCTTIME.pretty)),
    //filter(o=>contains("rain", o.wx.toLowerCase()))
)(data.hourly_forecast)

console.log("When where there be a chance of rain this weekend?", result)
