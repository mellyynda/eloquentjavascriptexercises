// Looping a triangle
let hash = "#";
for (i = 0; i < 7; i++) {
    console.log(hash);
    hash += "#";
}

// FizzBuzz

for (let num = 1; num <= 100; num++) {

    if (num % 3 == 0 && num % 5 == 0) {
        console.log('FizzBuzz');
    } else if (num % 3 == 0) {
        console.log('Fizz');
    } else if (num % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(num);
    }
}

// Chessboard

// let black = "#";
// let row1 = '';
// let row2 = '';
// let chess = "";
// console.log(black);


// for (j = 0; j < 4; j++) {
//     row1 += black + " ";
// }

// for (i = 0; i < 4; i++) {
//     row2 += " " + black;
// }

// for (k = 0; k < 4; k++) {
//     chess += row1 + '\n' + row2 + '\n';
// }
// console.log(chess)

let chess2 = '';
let string = ' ';

for (i = 1; i <= 8; i++) {

    for (j = 0; j < 4; j++) {
        string = string + "#" + " ";
    }

    if (i % 2 == 0) {
        string += '\n' + " ";
    } else string += '\n';
}
console.log(string);

