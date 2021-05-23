const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title",
    },
    {
        type: "editor",
        message:
            "Write a description for your project. (Use markdown to format this section. Save and exit to include in the README)",
        name: "description",
    },
    {
        type: "editor",
        message:
            "How do you install dependencies for your project? (Use markdown to format this section. Save and exit to include in the README)",
        name: "installation",
    },
    {
        type: "editor",
        message:
            "Provide instructions for the users to correctly use your project. (Use markdown to format this section. Save and exit to include in the README)",
        name: "usage",
    },
    {
        type: "editor",
        message:
            "How can other developers contribute to your project? (Use markdown to format this section. Save and exit to include in the README)",
        name: "contributing",
    },
    {
        type: "editor",
        message:
            "Show examples and tests for your application here. (Use markdown to format this section. Save and exit to include in the README)",
        name: "tests",
    },
    {
        type: "list",
        message: "Pick a license for your project.",
        name: "license",
        choices: ["MIT", "Apache", "GNU", "ISC", "None"],
    },
    {
        type: "input",
        message: "Add you GitHub username.",
        name: "github",
    },
    {
        type: "input",
        message: "Add your E-Mail.",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log("The file has been saved! Check this directory for a readmes folder.");
    });
}

function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./readmes/README.md", data);
    });
}

init();
