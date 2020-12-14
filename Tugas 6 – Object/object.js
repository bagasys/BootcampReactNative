function arrayToObject(data) {
    let newObjs = [];

    data.forEach((d) => {
        let newObj = {};
        newObj.firstName = d[0];
        newObj.lastName = d[1];
        newObj.gender = d[2];

        const now = new Date();
        const currentYear = now.getFullYear();
        if (!d[3] || d[3] > currentYear) {
            newObj.age = "Invalid Birth Year"
        } else {
            newObj.age = currentYear - d[3];
        }
        newObjs.push(newObj);
    });

    return newObjs;
}

function printObjects(objects) {
    objects.forEach((object, i) => {
        console.log(`${i + 1}. ${object.firstName} ${object.lastName} :`, object);
    });
}

const objects = arrayToObject([["Abduh", "Muhamad", "male", 1992], ["Ahmad", "Taufik", "male", 1985]])
printObjects(objects);

// nomor 2

const products = [
    {
        product: 'sepatu',
        brand: 'Stacattu',
        price: 1500000
    },
    {
        product: 'baju',
        brand: 'Zoro',
        price: 500000
    },
    {
        product: 'baju',
        brand: 'H&N',
        price: 250000
    },
    {
        product: 'Sweater',
        brand: 'Uniklooh',
        price: 175000
    },
    {
        product: 'Casing Handphone',
        price: 50000
    },
]

products.sort((a, b) => {
    return b.price - a.price
});

function shoppingTime(memberId, money) {
    if (!memberId) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }
    if (money < 50000) {
        return "Mohon maaf, uang tidak cukup"
    }

    const newObj = {
        memberId,
        money,
        changeMoney: money,
        listPurchased: []
    };

    products.forEach(product => {
        if (newObj.changeMoney >= product.price) {
            newObj.listPurchased.push(`${product.product}${product.brand ?  (' ' + product.brand) : '' }`)
            newObj.changeMoney -= product.price;
        }

    })
    return newObj;
}

console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());
console.log(shoppingTime('1820RzKrnWn08', 2475020));


//nomor 3

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let newObjs = [];



    arrPenumpang.forEach(data => {
        const indexAwal = rute.findIndex(r => r === data[1])
        const indexAkhir = rute.findIndex(r => r === data[2])
        let newObj = {
            penumpang: data[0],
            naikDari: data[1],
            tujuan: data[2],
            bayar: (indexAkhir - indexAwal) * 2000
        }
        newObjs.push(newObj)
    })
    return newObjs
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([])); //[]