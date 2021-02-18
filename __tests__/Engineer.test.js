const Engineer = require('../lib/Engineer');

test("Checks engineer's info", () => {
    const engineer = new Engineer('Dusty Bunsen');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
})
