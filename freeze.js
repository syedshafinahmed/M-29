const employee = {
    name: "Ahmed Dhruv",
    age: 24,
    designation: "QA",
    salary: 20000,
    experience: 2
}

Object.freeze(employee);
delete employee.experience;
employee.salary = employee.salary + 5000;
employee.location = "Dhaka";
console.log(employee);