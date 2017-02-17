//COME BACK TO THIS...

const data = require('./data.js')
const { map, filter, reduce, compose, take, contains, propEq, propSatisfies } = require('ramda')

// Is there a chance of rain this weekend?  return either yes or no.

//Expected Output:
// Is there a chance of rain this weekend? Yes


// your code gooes here

var result = compose (

)(data.hourly_forecast)


console.log("Is there a chance of rain this weekend?", result)
