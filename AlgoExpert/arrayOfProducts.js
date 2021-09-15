//brute force solution
function arrayOfProducts(array) {
  // Write your code here.
	let resultArr = [];

	for(let i = 0; i < array.length; i++) {
		let currentPos = i;
		let product = 1;
		for(let j = 0; j < array.length; j++) {
			if(j !== currentPos) {
				product *= array[j];
			}
		}
		resultArr.push(product);
	}
	return resultArr;
}
//O(N^2) times, O(N) space

//optimized solution
function arrayOfProducts(array) {
  // Write your code here.
	let resultArr = [];
	let leftArr = new Array(array.length).fill(1);
	let rightArr = new Array(array.length).fill(1);
	let product = 1;

	//fill in left array
	for(let i = 0; i < array.length; i++) {
		leftArr[i] = product;
		product *= array[i];
	}

	product = 1;
	//fill in right array
	for(let i = array.length - 1; i >= 0; i--) {
		rightArr[i] = product;
		product *= array[i];
	}

	for(let i = 0; i < array.length; i++) {
		resultArr.push(rightArr[i] * leftArr[i]);
	}

	return resultArr;
}
//O(N) time, O(N) space