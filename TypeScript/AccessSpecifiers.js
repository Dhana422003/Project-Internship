var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setAge = function (age) {
        this.age = age;
    };
    return User;
}());
var user = new User("Dhana", 22);
console.log(user.getName());
console.log(user.getAge());
user.setName("Shobana");
user.setAge(22);
console.log(user.getName());
console.log(user.getAge());
