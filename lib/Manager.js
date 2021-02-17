const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role) {
        super(name, id, email, role);
    }
}

module.exports = Manager;