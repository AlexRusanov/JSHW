//obligatory task
// let number = +prompt('Insert your number');
// while (!Number.isInteger(number)) {
//     number = +prompt('The number is not Integer. Please insert Integer');
// }
//
// if (number < 5) {
//     console.log('Sorry, no numbers');
// } else {
//     for (let i = 5; i<=number; i=i+5) {
//         console.log(i);
//     }
// }
// //Not obligatory task
let m = +prompt('Insert min integer number'),
    n = +prompt('Insert max integer number');

while (m > n || m < 1 || n < 1 || !Number.isInteger(m) || !Number.isInteger(n)) {
    alert('Input is incorrect!!!');
    m = +prompt('Insert min integer number');
    n = +prompt('Insert max integer number');
}

for (let i = m; i <= n; i++) {
    if (i === 2) {
        console.log(i);
    }
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            break;
        }
        if (j === i-1) {
            console.log(i);
        }
    }
}