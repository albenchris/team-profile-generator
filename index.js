const inquirer = require('inquirer');
const questions = require('./src/questions');
// const Employee = require('./lib/Employee');

// let employee = new Employee('Dusty Bunsen', 'Manager', '101', 'test@email.com');

// console.table(employee.getInfo());

inquirer.prompt(questions)