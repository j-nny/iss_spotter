const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It didn\'t work!', error);
//     return;
//   } else {
//     console.log('It worked! Returned IP' , ip);
//   }
// });

// fetchCoordsByIP('162.245.144.188', (error, coords) => {
//   if (error) {
//     console.log('Error: ', error);
//     return;
//   } else {
//   console.log(coords);
//   }
// });

// fetchISSFlyOverTimes( { latitude: '49.26200', longitude: '-123.09230' }, (error, response) => {
//   if (error) {
//     console.log('Error: ', error);
//     return;
//   } else {
//   console.log(response);
//   }
// });

const printPassTimes = function(passTimes) {
  for (let pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`)
  }
}


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log('It didn\'t work! ', error)
  }
  printPassTimes(passTimes);
});