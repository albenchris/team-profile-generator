const Employee = require('../lib/Employee');

test("Checks employee's info", () => {
    const employee = new Employee('Employee', 'Dusty Bunsen', '1', 'nuthinbutdust@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test("Gets employee's name", () => {
    const employee = new Employee('Employee', 'Dusty Bunsen', '1', 'nuthinbutdust@email.com');

    expect(employee.getName()).toHaveProperty('name');
    expect(employee.name).toBe('Dusty Bunsen');
});

test("Gets employee's ID", () => {
    const employee = new Employee('Employee', 'Dusty Bunsen', '1', 'nuthinbutdust@email.com');

    expect(employee.getId()).toHaveProperty('id');
    expect(employee.id).toBe('1');
});

test("Gets employee's email", () => {
    const employee = new Employee('Employee', 'Dusty Bunsen', '1', 'nuthinbutdust@email.com');

    expect(employee.getEmail()).toHaveProperty('email');
    expect(employee.email).toBe('nuthinbutdust@email.com');
});

test("Gets employee's role", () => {
    const employee = new Employee('Employee', 'Dusty Bunsen', '1', 'nuthinbutdust@email.com');

    expect(employee.getRole()).toHaveProperty('role');
    expect(employee.role).toBe('Employee');
});
