const inquirer = require('inquirer');

class Employee {
    constructor(name = '', role = '', id = '', email = '') {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;       
    }

    getInfo() {
        return {
            name: this.name,
            role: this.role,
            id: this.id,
            email: this.email
        }
    }
}

module.exports = Employee;