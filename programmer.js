// Input nilai dari pengguna
nilaiCoding = 20
nilaiInterview = "B"

statusCoding = "";
statusInterview = "";
// Menilai hasil test coding
if (nilaiCoding > 80) {
    statusCoding = "LOLOS";
} else if (nilaiCoding >= 60) {
    statusCoding = "DIPERTIMBANGKAN";
} else {
    statusCoding = "GAGAL";
}

// Menilai hasil test interview
if (nilaiInterview === "A" || nilaiInterview === "B") {
    statusInterview = "LOLOS";
} else {
    statusInterview = "GAGAL";
}

// Menentukan status akhir
if ((statusCoding === "LOLOS" || statusCoding === "DIPERTIMBANGKAN") && statusInterview === "LOLOS") {
    console.log("Selamat! Kamu Berhasil Menjadi Calon Programmer");
} else {
    console.log("Maaf, Kamu Belum Berhasil Menjadi Calon Programmer");
}
