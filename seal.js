const employee = {
    name: "Ahmed Dhruv",
    age: 24,
    designation: "QA",
    salary: 20000,
    experience: 2
}

// only modifies, can not add or delete
Object.seal(employee);
delete employee.experience;
employee.salary = employee.salary + 5000;
employee.location = "Dhaka";
console.log(employee);