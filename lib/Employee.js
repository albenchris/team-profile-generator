const inquirer = require('inquirer');

class Employee {
    constructor(name = '') {
        this.name = name
    }
}

module.exports = Employee;