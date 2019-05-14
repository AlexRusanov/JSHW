const notAllowedMassage = 'You are not allowed to visit this website';
const welcome = 'Welcome, ';

let userName = prompt('Enter your name'),
    userAge = prompt('Enter your age');

if (!userName) {
    userName = prompt('You have not entered your name. Please enter your name', userName);
}

if (isNaN(userAge)) {
    userAge = prompt('The age is incorrect. Please enter your age', userAge);
}

if (userAge < 18) {
    alert(notAllowedMassage);
} else  if (userAge >= 18 && userAge <= 22) {
    let accessConfirm = confirm('Are you sure you want to continue?');
    if (accessConfirm) {
        alert(welcome + userName);
    } else {
        alert(notAllowedMassage);
    }
} else {
    alert(welcome + userName);
}
