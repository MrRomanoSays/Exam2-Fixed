const data = require('./data.js')
const { map, filter, reduce, compose, take } = require('ramda')
// Return the first 25 simple hourly forecast observations.
// Each object in the returned array should include the following forecast infomation:
  //  day of the week (Ex: 'Friday')
  //  time and date
  //  temperature in fahrenheit
  //  weather condition (ex: 'Rain')


// const simpleWeatherForecast = function (ob) {
//   return {Day: ob.FCTTIME.weekday_name,
//   TimeAndDate: ob.FCTTIME.pretty,
//   Temperature: ob.temp.english,
//   WeatherCondition: ob.condition}
// }


//Your code goes here

const simpleForecast = function (o) {
  return {Day: o.FCTTIME.weekday_name, TimeAndDate: o.FCTTIME.pretty, Temperature: o.temp.english, WeatherCondition: o.condition}
}

var result = compose (
    map(simpleForecast),
    take(25)
)(data.hourly_forecast)

console.log("1) First 25 simplified hourly forecast observations: ", result)
