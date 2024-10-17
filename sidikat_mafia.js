 // Set Variabel
 nama = "Icaa"
 umur = 19
 tempat_tinggal = "New York"
 tabungan = 2000000

 // Pengecekan Umur
 if (umur > 40 && tempat_tinggal == "Nevada" || tempat_tinggal == "New York" || tempat_tinggal == "Havana" && tabungan >= 10000000) {
    console.log (nama + 'kemungkinan adalah seorang anggota mafia dengan pangkat DON')
 } else if (umur <= 40 && umur >= 25){
    console.log (nama + 'kemungkinan adalah seorang anggota mafia dengan pangkat UNDERBOSS')
 } else if (umur <= 24 && umur >=18){
    console.log (nama + 'kemungkinan adalah seorang anggota mafia dengan pangkat CAPO')
 } else {
    console.log (nama + "tidak mencurigakan")
 }
 