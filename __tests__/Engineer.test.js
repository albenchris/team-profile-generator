const Engineer = require('../lib/Engineer');

test("Checks engineer's name", () => {
    const engineer = new Engineer('Dusty Bunsen');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
})

test("gets engineer's info", () => {
    const engineer = new Engineer('Dusty Bunsen');

    expect(engineer.getInfo()).toHaveProperty('name');
    expect(engineer.getInfo()).toHaveProperty('role');
    expect(engineer.getInfo()).toHaveProperty('id');
    expect(engineer.getInfo()).toHaveProperty('email');
})