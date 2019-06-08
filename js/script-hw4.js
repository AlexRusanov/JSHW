// const createNewUser = () => {
//     const newUser,
//         firstName = prompt('Enter your first name'),
//         lastName = prompt('Enter your last name');
//
//     newUser = {firstName,
//                 lastName,
//                 getLogin(){
//         return firstName.substr(0, 1).toLowerCase() + lastName.toLowerCase();
//     }}
//
//     return newUser;
// }
//
// console.log(createNewUser().getLogin());

const createNewUser = () => {
    const newUser = {};
    let firstName = prompt('Enter your first name'),
        lastName = prompt('Enter your last name');

    Object.defineProperty(newUser, "firstName", {
        writable: false,
        configurable: true
    });
    Object.defineProperty(newUser, "lastName", {
        writable: false,
        configurable: true
    });

    newUser.setFirstName = (val) => {
        Object.defineProperty(newUser, "firstName", {
            value: val
        })
    };
    newUser.setLastName = (val) => {
        Object.defineProperty(newUser, "lastName", {
            value: val
        })
    };
    newUser.getLogin = () => {
        return firstName.substr(0, 1).toLowerCase() + lastName.toLowerCase();
    };

    newUser.setFirstName(firstName);
    newUser.setLastName(lastName);

    return newUser;
};

let user = createNewUser();

console.log(user);
console.log(user.getLogin());

user.firstName = "gogi";
console.log(user);

user.setFirstName("gogi");
console.log(user);



