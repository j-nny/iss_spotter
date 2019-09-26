const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log('It didn\'t work!', error);
    return;
  } else {
    console.log('It worked! Returned IP' , ip);
  }
});

fetchCoordsByIP('162.245.144.188', (error, latLong) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
    console.log(latLong);
});