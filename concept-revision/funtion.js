// function declaration 


function showMessage(){
    console.log("Hello World");
}
showMessage()

// function expression - use variable as function expression

let showMessage2 = function(){
    console.log("Hello World");
    return 2;
};

console.log(showMessage2());
console.log(showMessage2);


