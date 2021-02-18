const Intern = require('../lib/Intern');

test("Checks intern's info", () => {
    const intern = new Intern('Dusty Bunsen');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
})
