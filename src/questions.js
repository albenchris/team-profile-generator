const questions = [
    {
        type: 'list',
        name: 'role',
        message: "What is this employee's role? ",
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name? ",
        validate: (name => ( name ? true : console.log("Please enter employee's name") ))
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter this employee's ID number: ",
        validate: (id => ( id ? true : console.log("Please enter employee's ID") ))
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter this employee's email address: ",
        validate: function (email) {
            valid =
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                .test(email)

            if (!valid) {
                console.log("  Please enter a valid email")
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'office',
        message: "Please enter the manager's office number: ",
        validate: (office => ( office ? true : console.log("Please enter the manager's office number") )),
        when: ({ role }) => ( role === 'Manager' ? true : false )
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter the engineer's GitHub username: ",
        validate: (github => ( github ? true : console.log("Please enter the engineer's username") )),
        when: ({ role }) => ( role === 'Engineer' ? true : false )
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the name of this intern's school: ",
        validate: (school => ( school ? true : console.log("Please enter the intern's school name") )),
        when: ({ role }) => ( role === 'Intern' ? true : false )
    },
    // Continue adding employees? If so, repeat questions
    {
        type: 'confirm',
        name: 'continue',
        message: "Do you wish to add more employees?",
        default: false
    }
];

module.exports = questions;