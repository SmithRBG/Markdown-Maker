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
    },
    {
        type:"input",
        message: "What is your email address?",
        name: "Email",
    },
    {
        type: "input",
        message: "What is your project's title?",
        name: "Title",
    },
    {
        type: "input",
        message: "Give a description of your project",
        name: "Description",
    },
    {
        type: "input",
        message: "What will your project be used for?",
        name: "Usage",
    },
    {
        type: "input",
        message: "What license was used?",
        name: "License",
    },
    {
        type: "input",
        message: "Did you have any contributors?",
        name: "Contributors",
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
