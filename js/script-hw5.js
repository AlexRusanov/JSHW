const parseDate = () => {
    let birthdayInput = prompt('Enter your birthday').split(".");

    return new Date(birthdayInput[2], birthdayInput[1]-1, birthdayInput[0]);
};

const createNewUser = () => {
    let newUser,
        firstName = prompt('Enter your first name'),
        lastName = prompt('Enter your last name'),
        birthday = parseDate();

    newUser = {firstName,
                lastName,
                birthday,
                getLogin() {
                    return firstName.substr(0, 1).toLowerCase() + lastName.toLowerCase();
                },
                getAge() {
                    let today = new Date(),
                        birthDate = new Date(birthday),
                        age = today.getFullYear() - birthDate.getFullYear(),
                        month = today.getMonth() - birthDate.getMonth(),
                        day = today.getDate() - birthDate.getDate();
                    if (month < 0 || (month === 0 && day < 0))
                    {
                        age--;
                    }
                    return age;
                },
                getPassword() {
                    return firstName.substr(0, 1).toUpperCase() + lastName.toLowerCase() + birthday.getFullYear();
                }
    };

    return newUser;
};

let user = createNewUser(),
    userAge = user.getAge(),
    userPassword = user.getPassword();

console.log(user);
console.log(userAge);
console.log(userPassword);