const inquirer = require("inquirer");

//Team- Emp,Mang,Engi,Intr
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML.js");

const fs = require("fs");

const team = [];

function creatingEmTeam(){

    inquirer.prompt([
        {
            message: "What is the Employee's Name?",
            type: "input",
            name: "name"
        },
    
        {
            message: "What is the Employee's Email?",
            type: "input",
            name: "email"
        },
    
        {
            message: "What is the Employee's ID?",
            type: "input",
            name: "id"
        },
    
        {
            message: "What is the Employee's role?",
            type: "list",
            name: "role",
            choices: ["Engineer", "Intern"]
        }
    ])
    .then(response => {
        if(response.role === "Engineer")
            addingEngineer(response.name, response.email, response.id);
        else if(response.role === "Intern")
            addingIntern(response.name, response.email, response.id);
    });
    
}

function addingManager(){
    
    inquirer.prompt([
        {
            message: "What is the Manager's Name?",
            type: "input",
            name: "name"
        },
    
        {
            message: "What is the Manager's Email?",
            type: "input",
            name: "email"
        },
    
        {
            message: "What is the Manager's ID?",
            type: "input",
            name: "id"
        },
        {
            message: "What is the Manager's office number?",
            type: "input",
            name: "officeNumber"
        }
    ])
    .then(response => {
        const newManager = new Manager(response.name, response.email, response.id, response.officeNumber);
        team.push(newManager);
        addingEmployee();
    })
}

function addingEngineer(name, email, id){

    inquirer.prompt([
        {
            message: "What is the engineer's Github username?",
            type: "input",
            name: "github"
        }
    ])
    .then(response => {
        const newEngineer = new Engineer(name, email, id, response.github);
        team.push(newEngineer);
        addingEmployee();
    })
}

function addingIntern(name, email, id){

    inquirer.prompt([
        {
            message: "What is the intern's school name?",
            type: "input",
            name: "school"
        }
    ])
    .then(response => {
        const newIntern = new Intern(name, email, id, response.school);
        team.push(newIntern);
        addingEmployee();
    })
}

function addingEmployee(){

    inquirer.prompt([
        {
            message:"Would you like to add another Employee to the team?",
            type:"confirm",
            name: "addingEmployee"
        }
    ])
    .then(response =>{
        if(response.addingEmployee === true){
            creatingEmTeam();
        }else{
            getToFile("./dist/index.html",team);
        }
    })
}

function getToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), 
        (err) => err ? console.error(err) : console.log("\nYour HTML has been created.")
    );
}

addingManager();