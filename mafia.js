const prompt = require('prompt-sync')();

// Input data dari pengguna
const nama = prompt("Masukkan Nama: ");
const umur = parseInt(prompt("Masukkan Umur: "));
const tempatTinggal = prompt("Masukkan Tempat Tinggal: ");
const uangTabungan = parseFloat(prompt("Masukkan Uang Tabungan dalam dollar: "));

// Inisialisasi variabel pangkat dengan None (tidak ada pangkat)
let pangkat = "Tidak ada pangkat";

// Analisis ciri-ciri untuk masing-masing pangkat
if (umur > 40 && (tempatTinggal.toLowerCase() === "nevada" || tempatTinggal.toLowerCase() === "new york" || tempatTinggal.toLowerCase() === "havana") && uangTabungan > 10000000) {
    pangkat = "Don";
} else if (umur >= 25 && umur <= 40 && (tempatTinggal.toLowerCase() === "new jersey" || tempatTinggal.toLowerCase() === "manhattan" || tempatTinggal.toLowerCase() === "nevada") && uangTabungan >= 1000000 && uangTabungan <= 2000000) {
    pangkat = "Underboss";
} else if (umur >= 18 && umur <= 24 && (tempatTinggal.toLowerCase() === "california" || tempatTinggal.toLowerCase() === "detroit" || tempatTinggal.toLowerCase() === "boston") && uangTabungan < 1000000) {
    pangkat = "Capo";
}

// Output hasil analisis
if (pangkat !== "Tidak ada pangkat") {
    console.log(`${nama} kemungkinan adalah seorang anggota mafia dengan pangkat ${pangkat}.`);
} else {
    console.log(`${nama} tidak mencurigakan.`);
}
