const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(role, name, id, email, github) {
        super(role, name, id, email);

        this.role = 'Engineer';
        this.github = github;
    }

    getGithub() {
        return {
            github: this.github
        }
    }

    getRole() {
        return {
            role: this.role
        }
    }
}

module.exports = Engineer;