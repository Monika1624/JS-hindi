//Singleton

//object literals
//object creation
const user= {
    name: "Monika",// back side its consider as a string
    age: 26,
    location: "Hyderabad",
    email: "monika@gmail.com",
    isLoggedIn: "false",
    isLoggedDays: ["Monday", "Friday"]
}
//when u give a dot that time we don't take it as a string.
//but we can't consider this
console.log(user.email);
//when you don't give a dot that time you have to give " "
console.log(user["email"]);

