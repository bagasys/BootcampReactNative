function range(startNum, finishNum) {
    if (!startNum || !finishNum) {
        return -1;
    }

    const results = [];

    const asc = startNum < finishNum;

    const mutator = asc ? 1 : -1;

    for (let i = startNum; mutator > 0 && i <= finishNum || mutator < 0 && i >= finishNum; i+= mutator) {
        results.push(i)
    }
    return results;
}
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1

//

function rangeWithStep(startNum, finishNum, step) {
    if (!startNum || !finishNum) {
        return -1;
    }

    const results = [];

    const asc = startNum < finishNum;

    const mutator = asc ? step : step * -1;

    for (let i = startNum; mutator > 0 && i <= finishNum || mutator < 0 && i >= finishNum; i+= mutator) {
        results.push(i)
    }
    return results;
}

// Code di sini

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5]

//


function sum(startNum, finishNum, step=1) {
    if (!startNum) {
        return 0;
    }

    if (!finishNum) {
        return startNum;
    }

    let results = 0;

    const asc = startNum < finishNum;

    const mutator = asc ? step : step * -1;

    for (let i = startNum; mutator > 0 && i <= finishNum || mutator < 0 && i >= finishNum; i+= mutator) {
        results+= i
    }
    return results;
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling (data) {
    for (let i = 0; i < data.length; i++) {
        console.log(`Nomor ID: ${data[i][0]}\nNama Lengkap: ${data[i][1]}\nTTL: ${data[i][2]} ${data[i][3]}\nHobi: ${data[i][4]}`)
        console.log('');
    }
}

dataHandling(input)



function balikKata (kata) {
    let result = "";
    for(let i = kata.length - 1; i >= 0 ; i--) {
        result += kata[i]
    }
    return result;
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I


function dataHandling2(data) {
    data.splice(1, 1, data[1] + "Elsharawy")
    data.splice(4,1, "Pria", "SMA Internasional Metro" )
    console.log(data)

    const tanggal = data[3].split('/')
    let bulan = parseInt(tanggal[1]);

    switch (bulan) {
        case 1:
            bulan = 'Januari';
            break;
        case 2:
            bulan = 'Februari';
            break;
        case 3:
            bulan = 'Maret';
            break;
        case 4:
            bulan = 'April';
            break;
        case 5:
            bulan = 'Mei';
            break;
        case 6:
            bulan = 'Juni';
            break;
        case 7:
            bulan = 'Juli';
            break;
        case 8:
            bulan = 'Agustus';
            break;
        case 9:
            bulan = 'September';
            break;
        case 10:
            bulan = 'Oktober';
            break;
        case 11:
            bulan = 'November';
            break;
        case 12:
            bulan = 'Desember';
            break;
    }

    console.log(bulan)
    sortedTanggal = [...tanggal].sort(function(a, b) {
        return b - a;
    })
    console.log(sortedTanggal)
    console.log(tanggal.join('-'))
    console.log(data[1].slice(0, 15))
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input)