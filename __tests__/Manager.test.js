const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test("Checks manager's info", () => {
    const manager = new Manager('Employee', 'Dusty Bunsen', '1', 'nuthinbutdust@email.com', '201');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
});

test("Checks manager's office number", () => {
    const manager = new Manager('Employee', 'Dusty Bunsen', '1', 'nuthinbutdust@email.com', '201');

    expect(manager.office).toEqual(expect.any(String));
    expect(manager.office).toBe('201')
});

test("Checks if role is overridden to 'Manager'", () => {
    const manager = new Manager('Employee', 'Dusty Bunsen', '1', 'nuthinbutdust@email.com', '201');

    expect(manager.getRole()).toEqual({'role': manager.role});
    expect(manager.role).toBe('Manager');
});