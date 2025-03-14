var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "Hello,".concat(this.firstName, " ").concat(this.lastName);
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
var user1 = new User("Dhana", "Lakshmi", 22);
var user2 = new User("Teena", "Mary", 23);
console.log(user1.greet());
console.log(user1.getAge());
console.log(user2.greet());
console.log(user2.getAge());
