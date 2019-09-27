const  { nextISSTimesForMyLocation } = require('./iss_promised');

// fetchMyIP()
//   .then(nextISSTimesForMyLocation)
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body))
// .catch((error) => {
//   console.log('Error: ', error.message)
// })

  const printPassTimes = function(passTimes) {
    for (let pass of passTimes) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(pass.risetime);
      const duration = pass.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds!`)
    }
  }

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log('Error: ', error.message)
  })