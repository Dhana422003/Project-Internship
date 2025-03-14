function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function logUserDetails(user) {
    console.log("user: ".concat(user.firstName, " ").concat(user.middleName, " ").concat(user.lastName, " age: ").concat(user.age));
}
var user1 = { firstName: "Jaxon", middleName: "Lourde", lastName: "Johnson,", age: 22 };
var user2 = { firstName: "Beula", lastName: "Grace" };
console.log(greetUser(user2));
logUserDetails(user1);
