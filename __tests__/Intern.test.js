const Intern = require('../lib/Intern');

test("Checks intern's name", () => {
    const intern = new Intern('Dusty Bunsen');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
})

test("gets intern's info", () => {
    const intern = new Intern('Dusty Bunsen');

    expect(intern.getInfo()).toHaveProperty('name');
    expect(intern.getInfo()).toHaveProperty('role');
    expect(intern.getInfo()).toHaveProperty('id');
    expect(intern.getInfo()).toHaveProperty('email');
})