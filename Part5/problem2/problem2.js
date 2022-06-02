function caesar(offset, input) {
  // Caesar cipher 
  // Merupakan salah satu metode enkripsi

  let caesarChiper=" ";

  for (var i = 0; i < input.length; i++) {
  	const char=input[i];

  	if (char === " ") {
  		caesarChiper += char;
  		continue;
  	}

  	const ascii = char.charCodeAt();
  	let newAscii = ascii - 96 + (offset % 26);

  	if (newAscii > 26) newAscii = newAscii - 26 ;
  		caesarChiper += String.fromCharCode(newAscii + 96);
  	
  }
  return caesarChiper;

}

console.log(caesar(3, "abc")); // def
console.log(caesar(2, "alta")); // cnvc
console.log(caesar(10, "alterraacademy")); // kvdobbkkmknowi
console.log(caesar(1, "abcdefghijklmnopqrstuvwxyz")); // bcdefghijklmnopqrstuvwxyza
console.log(caesar(1000, "abcdefghijklmnopqrstuvwxyz")); // mnopqrstuvwxyzabcdefghijkl
