const Intern = require('../lib/Intern');

test("Checks intern's info", () => {
    const intern = new Intern('Employee', 'Dusty Bunsen', '1', 'nuthinbutdust@email.com');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
});

test("Checks intern's school name", () => {
    const intern = new Intern('Employee', 'Dusty Bunsen', '1', 'nuthinbutdust@email.com', 'Bunsen Academy');

    expect(intern.school).toEqual(expect.any(String));
});

test("Gets intern's school", () => {
    const intern = new Intern('Employee', 'Dusty Bunsen', '1', 'nuthinbutdust@email.com', 'Bunsen Academy');

    expect(intern.getSchool()).toEqual({'school': intern.school});
    expect(intern.school).toBe('Bunsen Academy');
});

test("Checks if role is overridden to 'Intern'", () => {
    const intern = new Intern('Employee', 'Dusty Bunsen', '1', 'nuthinbutdust@email.com');

    expect(intern.getRole()).toEqual({'role': intern.role});
    expect(intern.role).toBe('Intern');
});