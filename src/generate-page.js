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
    const [ managers, engineers, interns ] = employeeList

    console.log(managers);
    console.log(engineers);
    console.log(interns);

//     return `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Team</title>
//     <link rel="preconnect" href="https://fonts.gstatic.com">
//     <link href="https://fonts.googleapis.com/css2?family=Overpass+Mono&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <header>
//         <h1>My Team</h1>
//     </header>

//     <main class="container">
//         ${managers
//             // .filter(({ manager }) => manager)
//             .map(({ name, id, email, office }) => {
//                 return `
//         <div class="manager">
//             <h2>${name}</h2>
//             <h3>Manager</h3>
//             <div>
//                 <p>ID: ${id}</p>
//                 <p>Email: <a href="mailto:${email}">${email}</a></p>
//                 <p>Office Number: ${office}</p>
//             </div>
//         </div>
//         `;
//             })
//         .join('')}
    
//         ${engineers
//             // .filter(({ engineer }) => engineer)
//             .map(({ name, id, email, github }) => {
//                 return `
//         <div class="engineer">
//             <h2>${name}</h2>
//             <h3>Engineer</h3>
//             <div>
//                 <p>ID: ${id}</p>
//                 <p>Email: <a href="mailto:${email}">${email}</a></p>
//                 <p>GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></p>
//             </div>
//         </div>
//         `;
//             })
//         .join('')}

//         ${interns
//             // .filter(({ intern }) => intern)
//             .map(({ name, id, email, school }) => {
//                 return `
//         <div class="intern">
//             <h2>${name}</h2>
//             <h3>Intern</h3>
//             <div>
//                 <p>ID: ${id}</p>
//                 <p>Email: <a href="mailto:${email}">${email}</a></p>
//                 <p>School: ${school}</p>
//             </div>
//         </div>  
//         `;
//             })
//         .join('')}
//     </main>

//     <footer>
//         <h4>Made With ☕ by AlBenChris</h4>
//     </footer>
    
// </body>
// </html>
// `;
};

module.exports = { writeFile, copyFile, generateHTML };
