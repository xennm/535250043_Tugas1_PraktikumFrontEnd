//Tipe Data String

//Mengetahui Panjang karakter
let namadia = 'John';
console.log(namadia.length); // Output: 4 (jumlah karakter)

// Mengubah case Karakter
let teks = 'Belajar Javascript';

console.log(teks.toLowerCase()); // Output: belajar javascript
console.log(teks.toUpperCase()); // Output: BELAJAR JAVASCRIPT

//Mencari Indeks Karakter / Substring
let tek = 'Belajar Javascript';

console.log(tek.indexOf('Javascript'));
console.log(tek.indexOf('CSS'));
console.log(tek.lastIndexOf('a'));

//Memotong (Slice) String
let notes = 'Belajar Javascript';

console.log(notes.slice(7));    // Output: Javascript
console.log(notes.slice(0,7));  // Output: Belajar

//Mengganti (Replace) Substring
let n = 'Belajar Javascript';
console.log(n.replace('Javascript', 'CSS')); //Output: Belajar CS

//Memisahkan String + Array
let kalimat = 'Belajar,Javascript';

// split() akan memecah string jadi array berdasarkan tanda koma
let hasilSplit = kalimat.split(',');

console.log(hasilSplit); // Output: ['Belajar', 'Javascript']

//Menggabungkan Array -> String
let kataArray = ['Belajar','Javascript'];

// join() menggabungkan isi array dengan spasi
let hasilJoin = kataArray.join(' ')

console.log(hasilJoin); // Output: Belajar Javascript

//Interpolasi String (Template literal)
let orang = 'John Doe';
let usia = 25;

// Gunakan backtick ` dan sintaks ${}
let biodata = `nama : ${orang}, Umur ${usia}`;

console.log(biodata);
// Output: Nama: John Doe, Umur: 25