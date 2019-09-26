const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Reponse: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const IP = JSON.parse(body).ip;
    callback(error, IP);
  });
};


const fetchCoordsByIP = function(ip, callback) {
  // request(`https://ipvigilante.com/json/invalidiphere`, (error, response, body) => { // wrong IP address
  request(`https://ipvigilante.com/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
      return;
    }
    const latLong = { latitude: JSON.parse(body).data.latitude, longitude: JSON.parse(body).data.longitude };
    callback(null, latLong);
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};