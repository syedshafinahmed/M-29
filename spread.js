const numbers = [86, 7549, 324, 67]
console.log(numbers);
console.log(...numbers);


// const max = Math.max(21, 5, 6, 84, 65, 87)
const max = Math.max(...numbers);
console.log(max);

// const first = [1, 2, 3, 4, 5];
// const second = first;
// second.push(6);
// console.log(first);

const first = [1, 2, 3, 4, 5];
const second = [...first];
const third = [0, ...first, 6, 7, 8];
second.push(6);
console.log(first);
console.log(second);
console.log(third);


const ages = [34, 35, 36]
const prices = [37, 38, 39]
const all = [...ages, ...prices]
console.log(all)



const info = {
    name: 'Shafin',
    age: 24,
}
const fullInfo = {...info, designation: 'developer'};
console.log(fullInfo)