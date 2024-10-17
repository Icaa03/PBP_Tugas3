const prompt = require('prompt-sync')();

// Kalori yang terbakar per menit untuk setiap aktivitas
const laripermenit = 60 / 5; // 12 kalori per menit
const pushup_permenit = 200 / 30; // 6.67 kalori per menit
const plankpermenit = 5; // 5 kalori per menit
let total = 0;

// Mengambil input waktu dari pengguna
const lari = prompt("Waktu Lama Lari (dalam menit): ");
const pushup = prompt("Waktu Lama Push Up (dalam menit): ");
const plank = prompt("Waktu Lama Plank (dalam menit): ");

// Parsing input string ke tipe angka
const dlari = parseFloat(lari);
const dpushup = parseFloat(pushup);
const dplank = parseFloat(plank);

// Menghitung total kalori yang terbakar
if (dlari > 0) {
    total += dlari * laripermenit; // Kalori terbakar saat lari
}
if (dpushup > 0) {
    total += dpushup * pushup_permenit; // Kalori terbakar saat pushup
}
if (dplank > 0) {
    total += dplank * plankpermenit; // Kalori terbakar saat plank
}

// Menampilkan hasil total kalori yang terbakar
console.log("Total Kalori yang terbakar: " + total + " kalori");
