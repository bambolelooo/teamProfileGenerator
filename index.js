const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./src/generateHTML");

const team = [];
const sameQuestions = [
    {
        name: "name",
        message: "What is the employee's name?",
        type: "input",
    },
    {
        name: "id",
        message: "What is the employee's id?",
        type: "input",
    },
    {
        name: "email",
        message: "What is the employee's email?",
        type: "input",
    },
];

function askQuestions() {
    inquirer
        .prompt([
            {
                name: "mainQuestion",
                message:
                    "Choose the member you want to add to your team. (You can add multiple members)",
                type: "list",
                choices: ["Engineer", "Intern", "Manager", "Finish"],
            },
        ])
        .then((answer) => {
            if (answer.mainQuestion === "Finish") {
                generateHTML(team);
            } else if (answer.mainQuestion === "Engineer") {
                inquirer
                    .prompt([
                        ...sameQuestions,
                        {
                            name: "github",
                            message: "What is the employee's github?",
                            type: "input",
                        },
                    ])
                    .then((answer) => {
                        const engineer = new Engineer(
                            answer.name,
                            answer.id,
                            answer.email,
                            answer.github
                        );
                        team.push(engineer);
                        askQuestions();
                    });
            } else if (answer.mainQuestion === "Intern") {
                inquirer
                    .prompt([
                        ...sameQuestions,
                        {
                            name: "school",
                            message: "What is the employee's school?",
                            type: "input",
                        },
                    ])
                    .then((answer) => {
                        const intern = new Intern(
                            answer.name,
                            answer.id,
                            answer.email,
                            answer.school
                        );
                        team.push(intern);
                        askQuestions();
                    });
            } else if (answer.mainQuestion === "Manager") {
                inquirer
                    .prompt([
                        ...sameQuestions,
                        {
                            name: "officeNumber",
                            message: "What is the employee's office number?",
                            type: "input",
                        },
                    ])
                    .then((answer) => {
                        const manager = new Manager(
                            answer.name,
                            answer.id,
                            answer.email,
                            answer.officeNumber
                        );
                        team.push(manager);
                        askQuestions();
                    });
            }
        });
}
askQuestions();
