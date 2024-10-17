nama = "Icaa"
 umur = 7
 tempat_tinggal = "Nevada"
 tabungan = 900000

 if (umur > 40 && tabungan >= 10000000) {
   if (tempat_tinggal == "Nevada" || tempat_tinggal == "New York" || tempat_tinggal == "Havana")
      console.log (nama + ' kemungkinan adalah seorang anggota mafia dengan pangkat DON')
 } else if (umur > 24 && umur <= 40 && tabungan >= 1000000 && tabungan <= 2000000){
   if(tempat_tinggal == "Nevada" || tempat_tinggal == "Manhattan" || tempat_tinggal == "New Jersey")
      console.log (nama + ' kemungkinan adalah seorang anggota mafia dengan pangkat UNDERBOSS')
 } else if (umur >=18 && umur <= 24 && tabungan < 1000000){
   if(tempat_tinggal == "California" || tempat_tinggal == "Detroit" || tempat_tinggal == "Boston")
      console.log (nama + ' kemungkinan adalah seorang anggota mafia dengan pangkat CAPO')
 } else {
    console.log (nama + " tidak mencurigakan")
 }
 