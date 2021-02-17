const inquirer = require('inquirer');
const questions = require('./src/questions');
// const Employee = require('./lib/Employee');

// let employee = new Employee('Dusty Bunsen', 'Manager', '101', 'test@email.com');

// console.table(employee.getInfo());

function promptUser(answers) {
    if (!answers) {
        answers = [];
    }

    console.log(`
========================
Add Employee Information
========================
`)

    inquirer
        .prompt(questions)
        .then((answers) => {
            if (answers.continue) {
                return promptUser(answers);
            }
            return answers; 
        });
};

promptUser();