// Kalori yang terbakar per menit untuk setiap aktivitas
const laripermenit = 60 / 5; // 12 kalori per menit
const pushup_permenit = 200 / 30; // 6.67 kalori per menit
const plankpermenit = 5; // 5 kalori per menit
let total = 0;

// Mengambil input waktu dari pengguna
lari = 5
pushup = 20 
plank = 5
// Parsing input string ke tipe angka
dlari = parseFloat(lari);
dpushup = parseFloat(pushup);
dplank = parseFloat(plank);

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
