const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const questions = require('./src/questions');

function promptUser() {
    let employee = new Employee;

    console.log(`
========================
Add Employee Information
========================
`)

    return inquirer
        .prompt(questions)
        .then((answers) => {
            employee.name = answers.name;
            employee.role = answers.role;
            employee.id = answers.id;
            employee.email = answers.email;

            if (answers.continue) {
                return promptUser(answers);
            } 
            return employee; 
        });
};

promptUser().then(employeeList => {
    console.table(employeeList)
});
