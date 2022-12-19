const inquirer = require("inquirer");
const { readFile, writeFile } = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = [];
// const questions = [
//     [
//         {
//             name: "mainQuestion",
//             message:
//                 "Choose the member you want to add to your team. (You can add multiple members)",
//             type: "list",
//             choices: ["Engineer", "Intern", "Manager", "Quit"],
//         },
//     ],
//     [
//         {
//             name: "questionEngineer",
//             message:
//                 "Choose the member you want to add to your team. (You can add multiple members)",
//             type: "list",
//             choices: ["Engineer", "Intern", "Manager", "Quit"],
//         },
//     ],
// ];
inquirer
    .prompt([
        {
            name: "mainQuestion",
            message:
                "Choose the member you want to add to your team. (You can add multiple members)",
            type: "list",
            choices: ["Engineer", "Intern", "Manager", "Quit"],
        },
    ])
    .then((answer) => {
        if (answer.mainQuestion === "Engineer") {
            inquirer
                .prompt([
                    {
                        name: "name",
                        message: "What is the engineer's name?",
                        type: "input",
                    },
                    {
                        name: "id",
                        message: "What is the engineer's id?",
                        type: "input",
                    },
                    {
                        name: "email",
                        message: "What is the engineer's email?",
                        type: "input",
                    },
                    {
                        name: "github",
                        message: "What is the engineer's github?",
                        type: "input",
                    },
                ])
                .then((answers) => {
                    const engineer = new Engineer(
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.github
                    );
                    team.push(engineer);
                    console.log(team);
                    inquirer
                        .prompt([
                            {
                                name: "mainQuestion",
                                message:
                                    "Choose the member you want to add to your team. (You can add multiple members)",
                                type: "list",
                                choices: [
                                    "Engineer",
                                    "Intern",
                                    "Manager",
                                    "Quit",
                                ],
                            },
                        ])
                        .then((answer) => {
                            if (answer.mainQuestion === "Engineer") {
                                inquirer
                                    .prompt([
                                        {
                                            name: "name",
                                            message:
                                                "What is the engineer's name?",
                                            type: "input",
                                        },
                                        {
                                            name: "id",
                                            message:
                                                "What is the engineer's id?",
                                            type: "input",
                                        },
                                        {
                                            name: "email",
                                            message:
                                                "What is the engineer's email?",
                                            type: "input",
                                        },
                                        {
                                            name: "github",
                                            message:
                                                "What is the engineer's github?",
                                            type: "input",
                                        },
                                    ])
                                    .then((answers) => {
                                        const engineer = new Engineer(
                                            answers.name,
                                            answers.id,
                                            answers.email,
                                            answers.github
                                        );
                                        team.push(engineer);
                                        console.log(team);
                                    });
                            } else if (answer.mainQuestion === "Intern") {
                                inquirer.prompt([
                                    {
                                        name: "name",
                                        message: "What is the intern's name?",
                                        type: "input",
                                    },
                                    {
                                        name: "id",
                                        message: "What is the intern's id?",
                                        type: "input",
                                    },
                                ]);
                            }
                        });
                });
        }
    });

function askQuestions() {
    inquirer
        .prompt([
            {
                name: "mainQuestion",
                message:
                    "Choose the member you want to add to your team. (You can add multiple members)",
                type: "list",
                choices: ["Engineer", "Intern", "Manager", "Quit"],
            },
        ])
        .then((answer) => {
            i;
        });
}
