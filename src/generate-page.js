const fs = require('fs');

// writeFile promise
const writeFile = pageHTML => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Your team website has been created!'
            });
        });
    });
};

// copyFile promise
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Style sheet copied successfully!' 
            });
        });
    });
};

// Page template start
// filters through the team[] array and generates a card for each employee in order of role
const generateHTML = team => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://fonts.googleapis.com/css2?family=Overpass+Mono&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main class="container">
        <!-- MANAGERS START -->
        ${team
            .filter(({ role }) => role === 'Manager')
            .map(({ name, id, email, office }) => {
                return `
        <div class="manager">
            <h2>${name}</h2>
            <h3>Manager</h3>
            <div>
                <p>ID: ${id}</p>
                <p>Email: <a href="mailto:${email}">${email}</a></p>
                <p>Office Number: ${office}</p>
            </div>
        </div>
        `;
            })
        .join('')}
        <!-- MANAGERS END -->

        <!-- ENGINEERS START -->
        ${team
            .filter(({ role }) => role === 'Engineer')
            .map(({ name, id, email, github }) => {
                return `
        <div class="engineer">
            <h2>${name}</h2>
            <h3>Engineer</h3>
            <div>
                <p>ID: ${id}</p>
                <p>Email: <a href="mailto:${email}">${email}</a></p>
                <p>GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></p>
            </div>
        </div>
        `;
            })
        .join('')}
        <!-- ENGINEERS END -->

        <!-- INTERNS START -->
        ${team
            .filter(({ role }) => role === 'Intern')
            .map(({ name, id, email, school }) => {
                return `
        <div class="intern">
            <h2>${name}</h2>
            <h3>Intern</h3>
            <div>
                <p>ID: ${id}</p>
                <p>Email: <a href="mailto:${email}">${email}</a></p>
                <p>School: ${school}</p>
            </div>
        </div>  
        `;
            })
        .join('')}
        <!-- MANAGERS END -->
    </main>

    <footer>
        <h4>Made With ☕ by AlBenChris</h4>
    </footer>
    
</body>
</html>
`;
};
// Page template end

module.exports = { writeFile, copyFile, generateHTML };
