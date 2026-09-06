//Karakter Escape
// \n baris baru
let teksBarisBaru = 'halo,\nSelamat datang!';
console.log(teksBarisBaru)

// \t -> tab
let teksTab = 'Nama:\tIrvan BelajarIT';
console.log(teksTab);

// \' -> kutip tunggal
let teksKutip1 = 'I\'m Learning Javascript';
console.log(teksKutip1)

// \" -> kutip ganda
let teksKutip2 = 'Dia Berkata, \"Hello!\"';
console.log(teksKutip2);

// \\ -> backslash
let teksBackSlash = 'C:\\MyFolder\\MyFile.txt';
console.log(teksBackSlash);


//Ubah Case (toUpperCase & toLowerCase)
let contohKecil = 'hello world';
let hasilUpper = contohKecil.toLocaleUpperCase();
console.log(hasilUpper);

let contohBesar = 'Hello World';
let hasilLower = contohBesar.toLowerCase();
console.log(hasilLower); // Output: hello world