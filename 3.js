const data = require('./data.js')
const { map, filter, reduce, compose, take, contains } = require('ramda')

// What will the weather be like during my morning commute?
// Return an array of objects containing:
  // day of the week
  // date and time
  // weather condition
//  for the weekday morning rush hour (Monday through Friday / 7 am and 8 am)

const simpleForecast = function (o) {
  return {Day: o.FCTTIME.weekday_name, TimeAndDate: o.FCTTIME.pretty, Temperature: o.temp.english, WeatherCondition: o.condition}
}

var result = compose (
    map(simpleForecast),
    filter(o=>o.FCTTIME.civil === "7:00 AM" || o.FCTTIME.civil === "8:00 AM"),
    filter(o=>o.FCTTIME.weekday_name != "Saturday" && o.FCTTIME.weekday_name != "Sunday")
)(data.hourly_forecast)
console.log("What will the weather be like during my morning commute?", result)
