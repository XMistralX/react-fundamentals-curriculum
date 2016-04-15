var axios = require('axios');

var appId = "67a3aebdef9f68263f0577184594fd8d";

function getWeatherForecast(city){
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&type=accurate&APPID='+appId+'&cnt=5')
    .then(function (currentWeatherData) {
      console.log(currentWeatherData.data)
      return currentWeatherData.data;
    });
}
function getDailyWeatherForecast(city){
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&type=accurate&APPID='+appId)
    .then(function (currentWeatherData) {
      console.log(currentWeatherData.data)
      return currentWeatherData.data;
    });
}

module.exports = {
    getWeatherForecast: getWeatherForecast,
    getDailyWeatherForecast: getDailyWeatherForecast,
}
