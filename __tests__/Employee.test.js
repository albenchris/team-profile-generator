const Employee = require('../lib/Employee');

test("Checks employee's info", () => {
    const employee = new Employee('Dusty Bunsen');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
})

test("Gets employee's name", () => {
    const employee = new Employee('Dusty Bunsen');

    expect(employee.getName()).toHaveProperty('name');
})

test("Gets employee's ID", () => {
    const employee = new Employee('Dusty Bunsen');
    employee.id = "101";

    expect(employee.getId()).toHaveProperty('id');
})

test("Gets employee's email", () => {
    const employee = new Employee('Dusty Bunsen');
    employee.email = 'nuthinbutdust@email.com';

    expect(employee.getEmail()).toHaveProperty('email');
})

test("Gets employee's role", () => {
    const employee = new Employee('Dusty Bunsen');
    employee.role = 'Employee'

    expect(employee.getRole()).toHaveProperty('role');
})