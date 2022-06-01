function compare(a, b) {	
	let lower;
	let higher;

	if (a<b) {
		lower=a;
		higher=b;
	}else{
		lower=b;
		higher=a;
	}
	return lower;
}

console.log(compare("AKA", "AKASHI")); // AKA
console.log(compare("KANGAROO", "KANG")); // KANG
console.log(compare("KI", "KIJANG")); // KI
console.log(compare("KUPU-KUPU", "KUPU")); // KUPU
console.log(compare("ILALANG", "ILA")); // ILA
