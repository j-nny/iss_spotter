const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log('It didn\'t work!', error);
    return;
  } else {
    console.log('It worked! Returned IP' , ip);
  }
});

fetchCoordsByIP('162.245.144.188', (error, coords) => {
  if (error) {
    console.log('Error: ', error);
    return;
  } else {
  console.log(coords);
  }
});

fetchISSFlyOverTimes( { latitude: '49.26200', longitude: '-123.09230' }, (error, response) => {
  if (error) {
    console.log('Error: ', error);
    return;
  } else {
  console.log(response);
  }
});