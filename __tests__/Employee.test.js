const Employee = require('../lib/Employee');

test("Checks employee's info", () => {
    const employee = new Employee('Dusty Bunsen', 'Employee', '1', 'dusty@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test("Gets employee's name", () => {
    const employee = new Employee('Dusty Bunsen', 'Employee', '1', 'nuthinbutdust@email.com');

    expect(employee.getName()).toHaveProperty('name');
    expect(employee.name).toBe('Dusty Bunsen');
});

test("Gets employee's ID", () => {
    const employee = new Employee('Dusty Bunsen', 'Employee', '1', 'nuthinbutdust@email.com');

    expect(employee.getId()).toHaveProperty('id');
});

test("Gets employee's email", () => {
    const employee = new Employee('Dusty Bunsen', 'Employee', '1', 'nuthinbutdust@email.com');

    expect(employee.getEmail()).toHaveProperty('email');
});

test("Gets employee's role", () => {
    const employee = new Employee('Dusty Bunsen', 'Employee', '1', 'nuthinbutdust@email.com');

    expect(employee.getRole()).toHaveProperty('role');
});
