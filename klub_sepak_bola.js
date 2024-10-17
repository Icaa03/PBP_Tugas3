const nomorPunggung = 15
posisi = "";

// Menentukan posisi pemain berdasarkan nomor punggung
if (nomorPunggung % 2 === 0) {
    posisi = "target attacker";
} else if (nomorPunggung % 2 === 0 && nomorPunggung >= 50 && nomorPunggung <= 100) {
    posisi = "pemain yang berhak dipilih menjadi kapten tim";
} else if (nomorPunggung % 2 === 1) {
    posisi = "defender";
}

if (nomorPunggung > 90 && nomorPunggung % 2 === 1) {
    posisi = "Playmaker";
}

if (nomorPunggung % 3 === 0 && nomorPunggung % 5 === 0) {
    posisi = "keeper";
}

// Output posisi pemain berdasarkan nomor punggung
if (posisi !== "") {
    console.log("Nomor punggung " + nomorPunggung + " digunakan untuk posisi: " + posisi);
} else {
    console.log("Tidak ada aturan yang sesuai untuk nomor punggung " + nomorPunggung);
}
