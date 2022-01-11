//MY SOLUTION: O(N^2) time, O(N) space
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  let numOfConferenceRoom = 0;
  let lengthOfMeeting = Array(1000001).fill(0);

  for (const [start, end] of intervals) {
    for (let i = start; i < end; i++) {
      lengthOfMeeting[i] += 1;
    }
  }
  for (let i = 0; i < lengthOfMeeting.length; i++) {
    numOfConferenceRoom = Math.max(numOfConferenceRoom, lengthOfMeeting[i]);
  }
  return numOfConferenceRoom;
};
