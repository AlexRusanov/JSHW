let number1 = +prompt('Enter first number'),
    number2 = +prompt('Enter second number'),
    operation = prompt('Enter math operation');

while (!number1 || !number2) {
    number1 = +prompt('Уou have not entered a number. Enter first number', String(number1));
    number2 = +prompt('Уou have not entered a number. Enter second number', String(number2));
}

const calculate = (num1, num2, operator) => {
     switch(operator) {
         case '+' :
             console.log(num1 + num2);
             break;
         case '-' :
             console.log(num1 - num2);
             break;
         case '*' :
             console.log(num1 * num2);
             break;
         case '/' :
             console.log(num1 / num2);
             break;
     }
};

calculate(number1, number2, operation);