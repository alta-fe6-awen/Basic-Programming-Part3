function compare(a, b) {	
/*Cara aawen
	let lower;
	let higher;

	if (a<b) {
		lower=a;
		higher=b;
	}else{
		lower=b;
		higher=a;
	}
	return lower;*/

// Cara singkat
	if (b.length > a.length && b.includes(a)) {
		return a;
	}
	if (a.includes(b)) {
		return b;
	}
}

console.log(compare("AKA", "AKASHI")); // AKA
console.log(compare("KANGAROO", "KANG")); // KANG
console.log(compare("KI", "KIJANG")); // KI
console.log(compare("KUPU-KUPU", "KUPU")); // KUPU
console.log(compare("ILALANG", "ILA")); // ILA
