function longestPeak(array) {
  // Write your code here.
  let isIncreasing = false;
  let isDecreasing = false;
	let longest = 0;
	let possibleLongest = 1;
	//form a window, if windowEnd is not a peak, we move the start up.
	let startEl = 0;
	let currentEl = startEl;
	let nextEl = currentEl + 1;
  debugger;
	while(nextEl < array.length) {
		if(array[nextEl] > array[currentEl] && isDecreasing === false) {
      isIncreasing = true;
			possibleLongest++;
			currentEl++;
			nextEl++;
		} else if (array[nextEl] < array[currentEl] && (nextEl - startEl) > 1) {
      isDecreasing = true;
			possibleLongest++;
			currentEl++;
			nextEl++;
		} else {
      isIncreasing = false;
      isDecreasing = false;
			startEl++;
			currentEl = startEl;
			nextEl = currentEl + 1;
			longest = Math.max(longest, possibleLongest);
			possibleLongest = 1;
		}
    longest = Math.max(longest, possibleLongest);
	}
	return longest;
}

console.log(longestPeak([1, 3, 2]));