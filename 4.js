const data = require('./data.js')
const { map, filter, reduce, compose, take, contains } = require('ramda')

// When will it snow?
// Return an array of objects containing:
  // day of the week
  // date and time
  // weather condition


//I couldn't help tempering my excitement about snow by adding accumulation...

  const simpleForecast = function (o) {
    return {Day: o.FCTTIME.weekday_name, TimeAndDate: o.FCTTIME.pretty, WeatherCondition: o.condition, Accumulation: o.snow.english}
  }

  var result = compose (
      map(simpleForecast),
      filter(o=>Number(o.snow.english) > 0),
      filter(o=>contains("snow", o.wx.toLowerCase()))
  )(data.hourly_forecast)

console.log("When will it snow?", result)
