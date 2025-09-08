const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    console.log(number);
}

// object ==> for in
// array ==> for of

const employee = {
    name: "Ahmed Dhruv",
    age: 24,
    designation: "QA",
    salary: 20000,
    experience: 2
}
for(const key in employee){
    const value = employee[key];
    console.log(key, value);
}