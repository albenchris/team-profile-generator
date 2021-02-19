const Employee = require('./Employee');

class Intern extends Employee {
    constructor(role, name, id, email, school) {
        super(role, name, id, email);

        this.role = 'Intern';
        this.school = school;
    }

    getSchool() {
        return {
            school: this.school
        }
    }

    getRole() {
        return {
            role: this.role
        }
    }
}

module.exports = Intern;