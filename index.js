const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

inquirer
    .prompt({
        type: 'input',
        name: 'name',
        message: "What is the employee's name?"
    })
    .then(({ name }) => {
        let employee = new Employee(name)
        console.log(employee.name);
    });