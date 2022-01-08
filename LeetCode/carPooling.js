/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  let lengthOfTrip = Array(1001).fill(0);
  for (const [passengers, from, to] of trips) {
    lengthOfTrip[from] += passengers;
    lengthOfTrip[to] -= passengers;
  }

  let passengersInTrip = 0;
  for (let i = 0; i < lengthOfTrip.length; i++) {
    passengersInTrip += lengthOfTrip[i];
    if (passengersInTrip > capacity) return false;
  }
  return true;
};
