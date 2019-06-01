let number = +prompt('Enter number');

while (!number) {
    number = +prompt('Уou have not entered a number. Enter number', String(number));
}

const calcFactorial = (num) => {
   if (num === 1) {
        return num;
    }

    num *=calcFactorial(num-1);

    return num;
}

alert(calcFactorial(number));