// declaraing different objects



let user = {
    name : "Rohan",
    age : 26,
    location : "Santa Clara",
}

console.log(user.name);
console.log(user.age);
user.age = 100;
console.log(user.age);

console.log(user);


let key = "age";

console.log(key in user);



//Maintain permission over application :


let user2 = {
    name : "John",
};

let permission = {
    canView : true,
};

Object.assign(user2,permission);

console.log(user2);