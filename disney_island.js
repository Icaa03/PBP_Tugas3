// Input umur dan tinggi anak
umur = 9
tinggi = 150

tarif = 0;

// Menghitung tarif sesuai dengan umur dan tinggi anak
if (umur < 1) {
    console.log("Dilarang masuk");
} else if (umur < 3) {
    tarif = 30000;
    if (tinggi > 70) {
        tarif += 10000;
    }
} else if (umur < 7) {
    tarif = 40000;
    if (tinggi > 120) {
        tarif += 15000;
    }
} else if (umur < 10) {
    tarif = 50000;
    if (tinggi > 150) {
        tarif += 20000;
    }
} else {
    tarif = 80000;
}

// Output tarif harga
if (tarif > 0) {
    console.log(`Tarif harga untuk anak ${umur} tahun dengan tinggi ${tinggi} cm adalah Rp ${tarif}`);
}
