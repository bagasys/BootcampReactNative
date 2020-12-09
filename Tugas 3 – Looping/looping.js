let i = 2

console.log('LOOPING PERTAMA');
while (i <= 20) {
    console.log(`${i} - I love coding`);
    i += 2;
}

i -= 2;

console.log('LOOPING KEDUA');
while (i > 0) {
    console.log(`${i} - I will become a mobile developer`);
    i -= 2;
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

let a = 4, b = 8;
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