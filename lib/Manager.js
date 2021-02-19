const Employee = require('./Employee');

class Manager extends Employee {
    constructor(role, name, id, email, office) {
        super(role, name, id, email);

        this.role = 'Manager'
        this.office = office;
    }

    getRole() {
        return {
            role: this.role
        }
    }
}

module.exports = Manager;