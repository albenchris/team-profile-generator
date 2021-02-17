const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dusty Bunsen');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
})

test("gets employee's info as an object", () => {
    const employee = new Employee('Dusty Bunsen');

    expect(employee.getInfo()).toHaveProperty('name');
    expect(employee.getInfo()).toHaveProperty('id');
    expect(employee.getInfo()).toHaveProperty('email');
    expect(employee.getInfo()).toHaveProperty('role');
})
