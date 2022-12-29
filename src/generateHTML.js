const { readFile, writeFile } = require("fs");
function generateHTML(array) {
    const data = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My team</title>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossorigin="anonymous"
        />
    </head>
    <body class="bg-dark">
        <header>
            <h1 class="text-center text-light m-3">My team</h1>
        </header>

        <div class="container w-75 mx-auto">
            <div class="row row-cols-auto d-flex justify-content-between g-3">
                ${array.map((employee) => employee.getHTML()).join("")}
            </div>
        </div>
    </body>
</html>`;
    writeFile("./dist/index.html", data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("HTML file generated");
        }
    });
}
module.exports = generateHTML;
