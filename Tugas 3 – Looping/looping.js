let a = 2
let b = 2
console.log('LOOP PERTAMA')
while (a > 0 && a <= 22) {
    if(a === 22) {
        b = -2
        a = 22
        console.log('LOOP KEDUA')
    } else {
        if (b > 0) {
            console.log(`${a} - I love coding`)
        } else {
            console.log(`${a} - I will become a mobile developer`)
        }

    }
    a+=b
}


//------------------------------------------------------------------

for (let i = 1; i < 21; i++) {
    let kata = '';

    if (i % 2 === 0) {
        kata = 'Berkualitas';
    } else {
        if (i % 3 === 0) {
            kata = 'I Love Coding';
        } else {
            kata = 'Santai';
        }
    }

    console.log(`${i} - ${kata}`);
}

// ------------------------------------------------------------

a = 4; b = 8;
for (let i = 0; i < a; i++) {
    let row = ''
    for (let j = 0; j < b; j++) {
        row += '#'
    }
    console.log(row)
}

//---------------------------------------
let height = 7;
for (let i = 0; i < height; i++) {
    let row = ''
    for (let j = 0; j < i+1 ; j++) {
        row += '#'
    }
    console.log(row)
}

//
let size = 8;
for (let i = 0; i < size; i++) {
    let row = ''
    let genap = ' '
    let ganjil = '#'
    if (i % 2 !== 0) {
        genap = '#'
        ganjil = ' '
    }
    for (let j = 0; j < size ; j++) {
        if (j % 2 === 0) {
            row+= genap
        } else {
            row+= ganjil
        }
    }
    console.log(row)
}