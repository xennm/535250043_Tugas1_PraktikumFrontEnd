//Deklarasi variabel utama
let x = 5;
let y = 3;

console.log("=== Operator AND (&&) ===");
let isBothTrue = (x > 0) && (y < 10); //true, karena kondisi benar
console.log("isBothTrue:", isBothTrue);

let isAnyFalse = (x > 0) && (y > 10); //false, karena kondisi salah
console.log("isAnyFalse:", isAnyFalse);

console.log("\n=== Operator OR (||) ===");
let isEitherTrue = (x > 0) || (y > 10);//true, karena salah satu kondisi benar
console.log("isEitherTrue:", isEitherTrue);

let areBothFalse = (x < 0) || (y < 0);
console.log("areBothFalse:", areBothFalse);//false, karena kedua kondisi salah

console.log("\n=== Operator NOT (!) ===");
let isXNotZero = !(x === 0);//true, karena x tidak sama dengan 0
console.log("isXNotZero:", isXNotZero);

let isYNotPositive = !(y > 0);
console.log("isYNotPositive:", isYNotPositive);//false, karena y lebih besar dari 0

if (x > 0 && y < 20) [
 console.log("x lebih besar dari 0 dan y lebih kecil dari 20") 
]