const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dusty Bunsen');

    expect(employee.name).toBe('Dusty Bunsen');
})