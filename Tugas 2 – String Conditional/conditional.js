var nama = "bagas"
var peran = "guArd"

// Output untuk Input nama = '' dan peran = ''
if (nama === '' && peran === '') {
    console.log("Nama harus diisi!")
}else {
    if (nama !== '') {
        if (peran === '') {
            console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
        } else {
            console.log(`Selamat datang di Dunia Werewolf, ${nama}`);

            if (peran.toLowerCase() === 'penyihir') {
                console.log(`Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`)
            }

            if (peran.toLowerCase() === 'guard') {
                console.log(`Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`)
            }

            if (peran.toLowerCase() === 'werewolf') {
                console.log(`Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`)
            }
        }
    }
}

//

var hari = 21;
var bulan = 1;
var tahun = 1945;

let namaBulan = '';

switch (bulan) {
    case 1:
        namaBulan = 'Januari';
        break;
    case 2:
        namaBulan = 'Februari';
        break;
    case 3:
        namaBulan = 'Maret';
        break;
    case 4:
        namaBulan = 'April';
        break;
    case 5:
        namaBulan = 'Mei';
        break;
    case 6:
        namaBulan = 'Juni';
        break;
    case 7:
        namaBulan = 'Juli';
        break;
    case 8:
        namaBulan = 'Agustus';
        break;
    case 9:
        namaBulan = 'September';
        break;
    case 10:
        namaBulan = 'Oktober';
        break;
    case 11:
        namaBulan = 'November';
        break;
    case 12:
        namaBulan = 'Desember';
        break;
}

console.log(`${hari} ${namaBulan} ${tahun}`)