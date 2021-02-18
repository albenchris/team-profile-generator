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
            <h2>Jared</h2>
            <h3>Manager</h3>
            <div>
                <p>ID: 1</p>
                <p>Email: <a>jared@fakemail.com</a></p>
                <p>Office Number: 1</p>
            </div>
        </div>

        <div class="engineer">
            <h2>Alec</h2>
            <h3>Engineer</h3>
            <div>
                <p>ID: 2</p>
                <p>Email: <a>alec@fakemail.com</a></p>
                <p>GitHub: <a>ibealec</a></p>
            </div>
        </div>

        <div class="engineer">
            <h2>Grace</h2>
            <h3>Engineer</h3>
            <div>
                <p>ID: 3</p>
                <p>Email: <a>grace@fakemail.com</a></p>
                <p>GitHub: <a>gchoi2u</a></p>
            </div>
        </div>

        <div class="engineer">
            <h2>Tammer</h2>
            <h3>Engineer</h3>
            <div>
                <p>ID: 4</p>
                <p>Email: <a>tammer@fakemail.com</a></p>
                <p>GitHub: <a>tammerg</a></p>
            </div>
        </div>

        <div class="intern">
            <h2>John</h2>
            <h3>Intern</h3>
            <div>
                <p>ID: 5</p>
                <p>Email: <a>john@fakemail.com</a></p>
                <p>School: ZUniversity</p>
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
