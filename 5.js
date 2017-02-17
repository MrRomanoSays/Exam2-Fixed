const data = require('./data.js')
const { map, filter, reduce, compose, take, contains, uniq } = require('ramda')

// Return an array of the various weather conditions, the conditions cannot repeat.
// HINT: there'a a ramda function that returns a unique list.

// Expected Output:
// Unique and various weather conditions: [ 'Partly Cloudy',
//   'Clear',
//   'Mostly Cloudy',
//   'Overcast',
//   'Ice Pellets',
//   'Snow Showers',
//   'Snow',
//   'Chance of Rain' ]

var result = compose(
  uniq(),
  map(o=>o.condition)
)(data.hourly_forecast)

// your code goes here.

console.log("Unique and various weather conditions:", result)
