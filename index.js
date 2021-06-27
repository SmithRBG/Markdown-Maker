// TODO: Include packages needed for this application
const generatorMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer"); //why?

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "UserName",
        validate: (value)=>{if (value) {return true} else {return 'Please enter a response.'}},
    },
    {
        type:"input",
        message: "What is your email address?",
        name: "Email",
        validate: (value)=>{if (value) {return true} else {return 'Please enter a response.'}},
    },
    {
        type: "input",
        message: "What is your project's title?",
        name: "Title",
        validate: (value)=>{if (value) {return true} else {return 'Please enter a response.'}},
    },
    {
        type: "input",
        message: "Give a description of your project",
        name: "Description",
        validate: (value)=>{if (value) {return true} else {return 'Please enter a response.'}},
    },
    {
        type: "input",
        message: "What will your project be used for?",
        name: "Usage",
        validate: (value)=>{if (value) {return true} else {return 'Please enter a response.'}},
    },
    {
        type: "list",
        message: "What license was used?",
        name: "Licenses",
        choices: [
            'MIT License',
            'GNU Lesser General Public License v3.0',
            'Mozilla Public License 2.0',
            'GNU Affero General Public License v3.0',
            'The Unlicense',
            'Apache License 2.0',
            'GNU General Public License v3.0',
        ]
    },
    {
        type: "input",
        message: "Did you have any contributors?",
        name: "Contributors",
        validate: (value)=>{if (value) {return true} else {return 'Please enter a response.'}},
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./output/" + fileName, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Your ReadMe file " + fileName + " was successfully written.");
    })  
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("READMEOutput.md", generatorMarkdown (data));
    })
}

// Function call to initialize app
init();
