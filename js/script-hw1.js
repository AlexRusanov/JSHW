const notAllowedMassage = 'You are not allowed to visit this website';
const welcomeMassage = 'Welcome, ';

let userName = prompt('Enter your name'),
    userAge = Number(prompt('Enter your age'));

while (!userName) {
    userName = prompt('You have not entered your name. Please enter your name', userName);
}

//проверка на 0 делаеться для случая когда вводиться пустая строка - она преобразуеться в 0 посредсвом метода Number в 5-й строке
while (isNaN(userAge) || userAge == 0) {
    userAge = Number(prompt('The age is incorrect. Please enter your age', String(userAge)));
}

if (userAge < 18) {
    alert(notAllowedMassage);
} else  if (userAge >= 18 && userAge <= 22) {
    let accessConfirm = confirm('Are you sure you want to continue?');
    if (accessConfirm) {
        alert(welcomeMassage + userName);
    } else {
        alert(notAllowedMassage);
    }
} else {
    alert(welcomeMassage + userName);
}
