function removeDuplicates(array) {
	return Array.from(new Set(array));
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); // 4
console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9])); // 6
console.log(removeDuplicates([2, 2, 2, 11])); // 2
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])); // 4
console.log(removeDuplicates([1, 2, 3, 11, 11])); // 4

const array2 = [3,2,3,2,];

console.log( Array.from(new Set(array2)));;