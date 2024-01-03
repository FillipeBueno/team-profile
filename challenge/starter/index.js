const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const questions = [
    {
        type: 'input',
        message: 'what is the team managers name?',
        name: 'name',
        
    },

];

async function promptManager(){
    const dataName = await inquirer.prompt(questions);
    const firstInput = dataName.name;
    console.log(firstInput + 'from index.js');
    return firstInput;
    
};


module.exports = { promptManager };