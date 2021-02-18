const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test("Checks manager's info", () => {
    const manager = new Manager('Dusty Bunsen');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
})

test("Checks manager's office number", () => {
    const manager = new Manager('Dusty Bunsen');

    expect(manager.office).toEqual(expect.any(String));
})