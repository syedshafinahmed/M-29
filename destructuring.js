const product = {
    name: "Shirt",
    price: 1450,
    quantity: 7
}
// const discount = product.price*20/100;
// const youPay = product.price - discount;
// const vatAmount = product.price*7/100;
// const totalAmount = youPay + vatAmount;

// const price = product.price;
// const discount = price*20/100;
// const youPay = price - discount;
// const vatAmount = price*7/100;
// const totalAmount = youPay + vatAmount;

const {name, price, quantity} = {
    name: "Shirt",
    price: 1450,
    quantity: 7
}

// const price = product.price;
const discount = price*20/100;
const youPay = price - discount;
const vatAmount = price*7/100;
const totalAmount = youPay + vatAmount;
console.log(name, price, quantity);
console.log(totalAmount);



const numbers = [25, 88];
const [first, second] = numbers;
const [physics, math] = [99, 95];