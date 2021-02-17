const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test("Checks manager's name", () => {
    const manager = new Manager('Dusty Bunsen');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
})

test("gets manager's info", () => {
    const manager = new Manager('Dusty Bunsen');

    expect(manager.getInfo()).toHaveProperty('name');
    expect(manager.getInfo()).toHaveProperty('role');
    expect(manager.getInfo()).toHaveProperty('id');
    expect(manager.getInfo()).toHaveProperty('email');
})