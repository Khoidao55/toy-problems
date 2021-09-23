//my solution: O(N) time, O(1) space
function firstDuplicateValue(array) {
  // Write your code here.
	let possibleFirstDuplicate = -1;
	let pointerOne = 0;
	let pointerTwo = pointerOne + 1;
	let posOfDuplicate = -1;
	let dupCount = 0;

	while(pointerTwo < array.length) {
		if(array[pointerOne] === array[pointerTwo]) {
			if(dupCount > 0) {
				let newPosition = pointerTwo;
				if(posOfDuplicate > newPosition) {
					possibleFirstDuplicate = array[pointerOne];
					posOfDuplicate = newPosition;
				}
			} else {
				posOfDuplicate = pointerTwo;
				possibleFirstDuplicate = array[pointerOne];
			}
			pointerOne++;
      pointerTwo = pointerOne;
			dupCount++;
		}

    if(pointerTwo === array.length - 1) {
			pointerOne++;
      pointerTwo = pointerOne + 1;
      continue;
		}

		pointerTwo++;
	}

	return possibleFirstDuplicate;
}

console.log(firstDuplicateValue([1,1]));