const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const questions = require('./src/questions');
const { writeFile, copyFile, generateHTML } = require('./src/generate-page.js');
const fs = require('fs');

// const employeeList = [];

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

promptUser()
    .then(data => {
        return generateHTML(data);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });
