interface User{
    firstName:string;
    lastName:string;
    middleName?:string;
    age?:number;
}
function greetUser(user:User)
{
return `Hello ${user.firstName} ${user.lastName}`;
}
function logUserDetails(user:User)
{
    console.log(`user: ${user.firstName} ${user.middleName} ${user.lastName} age: ${user.age}`);
}
let user1={firstName:"Jaxon",middleName:"Lourde" ,lastName:"Johnson," ,age:22};
let user2={firstName:"Beula", lastName:"Grace"};
console.log(greetUser(user2));
logUserDetails(user1);
