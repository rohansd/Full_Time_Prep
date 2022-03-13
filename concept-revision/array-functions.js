// Array function ways :

let sum = (a,b) => {
    return a+b;
}
console.log(sum(1,2));

//Another way :

let sum2 = (a,b) => a+b;
console.log(sum2(1,2));

let sum3 = (a=1,b=2) => a+b;

console.log(sum3());

let sum4 = () => {
    console.log("sum4 function");
    return 5;
};

console.log(sum4());