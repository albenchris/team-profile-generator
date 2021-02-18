const fs = require('fs');

const writeFile = pageHTML => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

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

const generateHTML = employeeList => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Overpass+Mono&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main class="container">    
        <div class="manager">
            <h2>${manager.name}</h2>
            <h3>Manager</h3>
            <div>
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.office}</p>
            </div>
        </div>

        <div class="engineer">
            <h2>${engineer.name}</h2>
            <h3>Engineer</h3>
            <div>
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>
        </div>

        <div class="intern">
            <h2>${intern.name}</h2>
            <h3>Intern</h3>
            <div>
                <p>ID: ${intern.id}</p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
        </div>  
    </main>

    <footer>
        <h4>Made With ☕ by AlBenChris</h4>
    </footer>
    
</body>
</html>
`;
};



module.exports = { writeFile, copyFile, generateHTML };
