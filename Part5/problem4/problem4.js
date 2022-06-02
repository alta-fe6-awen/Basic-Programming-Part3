function findMaxSumSubArray(k, arr) {

	let result = 0;
	for (var i = 0; i < k; i++) {
		result += arr[i];
	}

	let curr_sum = result;
	for (var i = k; i < arr.length; i++) {
		curr_sum += arr[i] - arr[i-k];
		result = Math.max(result,curr_sum);
	}
	return result;
  
}

console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])); // 9
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5])); // 7
console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1])); // 5
console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1])); // 7
console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1])); // 8
