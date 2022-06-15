const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7a6d78b3ef53856b82bd1cafa23435c2&query='+ latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
             // console.log('it is '+ body.current.weather_descriptions + ' today. currently it is ' + body.current.temperature + ' degress out but feels like ' + body.current.feelslike +'. There is a ' + body.current.precip + '% chance of rain.')
             callback(undefined,'it is '+ body.current.weather_descriptions + ' today. currently it is ' + body.current.temperature + ' degress out but feels like ' + body.current.feelslike +'. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast