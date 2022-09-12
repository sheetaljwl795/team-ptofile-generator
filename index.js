const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const renderHTML = require("./lib/renderhtml");
const teamMembers = [];

const enterManager = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "managerName",
            message: "Please enter manager's name"
        },
        {
            type: "input",
            name: "managerId",
            message: "Please enter manager's employee ID"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Please enter manager's email"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Please enter manager's office number"
        }
    ]).then(response => {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
        console.log(manager);
        teamMembers.push(manager);
        teamMenu();
    }) 

};

const teamMenu = () => { 
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Who are you adding to the team?",
            choices: ["Engineer", "Intern","Finish building my team"]
        }]).then((response) => {
            switch(response.memberChoice) {
                case 'Engineer':
                    enterEngineer();
                    break;
                case 'Intern':
                    enterIntern();
                    break;
                case 'Finish building my team':
                    exit();
                    break;
                default:
                    break;
            }

        });
};

const enterEngineer = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "engineerName",
            message: "Please enter engineer's name"
        },
        {
            type: "input",
            name: "engineerId",
            message: "Please enter engineer's employee ID"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Please enter engineer's email"
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "Please enter engineer's Github Username"
        }
    ]).then(response => {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGitHub);
        teamMembers.push(engineer);
        console.log(engineer);
        teamMenu();
    });
};

const enterIntern = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "internName",
            message: "Please enter intern's name"
        },
        {
            type: "input",
            name: "internId",
            message: "Please enter intern's employee ID"
        },
        {
            type: "input",
            name: "internEmail",
            message: "Please enter intern's email"
        },
        {
            type: "input",
            name: "internSchool",
            message: "Please enter intern's School name"
        }
    ]).then(response => {
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
        teamMembers.push(intern);
        console.log(intern);
        teamMenu();
    });
};

const exit = () => {
    const memberProfile = renderHTML(teamMembers);

    fs.writeFile('index.html', memberProfile, (error) => {
        if (error) {
            console.log(error)
        }
    });
};


enterManager();






