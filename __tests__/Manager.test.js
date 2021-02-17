const Manager = require('../lib/Manager');

test("Checks manager's name", () => {
    const manager = new Manager('Dusty Bunsen');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.any(String));
})