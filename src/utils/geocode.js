const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibWRhcmlmMDgxOTk4IiwiYSI6ImNsMW5pM2syaTAxMWMzanQ2cTViNHF0OGkifQ.7cOJa2IqlHZDk-cPvn98mw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            console.log('latitude:' + body.features[0].center[1] + ',' +
                'longitude:' + body.features[0].center[0])
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode