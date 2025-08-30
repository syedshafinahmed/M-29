add(10, 50);
function add(num1, num2) {
    return num1 + num2;
}

// function expression
const addition = function (num1, num2) {
    return num1 + num2
}
const result = addition(10, 50);
console.log(result);


// arrow function
const sum = (num1, num2) => num1 + num2;
const output = sum(15, 25);
console.log(output);


const multiply = (a, b) => a * b;
const mul = multiply(5, 7);
console.log(mul);

const getSquare = (x) => x * x;
console.log(getSquare(8));


const getHalf = num => num / 2;
console.log(getHalf(18));

const getFirstElement = element => element[0]
console.log(getFirstElement([1, 2, 3]));


document.getElementById(" ").addEventListener("click", () => {
    
})


document.getElementById(" ").addEventListener("click", event => {

})