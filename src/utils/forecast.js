const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=2bf63f5e6b3fee775e4ebe3b418216d0&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else {
            callback(undefined, ' It is currently ' + body.current.temperature + ' degress out. Feels like ' + body.current.feelslike + '.')
        }
    })
}

module.exports = forecast