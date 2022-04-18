const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const fs = require("fs")
const Inquirer = require("inquirer");
let teamHTMLCode = ""

function addManager(){
    console.log("Welcome to Team creation App")
    console.log("Add Manager")
    Inquirer.prompt([
        {
            type:"input",
            message:"Enter Manager name: ",
            name:"name"
        },
        {
            type:"input",
            message:"Enter Manager ID: ",
            name:"id"
        },
        {
            type:"input",
            message:"Enter Manager email: ",
            name:"email"
        },
        {
            type:"input",
            message:"Enter Manager Office number: ",
            name:"officenumber"
        },



    ]).then(userresponse => {
        const teamManager = new Manager(userresponse.name,userresponse.id,userresponse.email,userresponse.officenumber);
        teamHTMLCode += `
        <div class="card" style="width: 18rem;">
        <h5 class="card-title">${teamManager.name}</h5>
  <div class="card-body">
    <p class="card-text">Team Manager</p>
    <p class="card-text">Id:${teamManager.id}</p>
    <p class="card-text">Officenumber:${teamManager.officenumber}</p>
    <p class="card-text">Email:${teamManager.email}</p>
  </div>
</div>
        `
        createTeam()
    })
}

function createTeam(){
    Inquirer.prompt([
        {
            type:"list",
            choices:["Add Engineer","Add Intern","Exit App"],
            message:"Would you like to add another employee?",
            name: "userchoice"
        }
    ]).then(response => {
        switch(response.userchoice){
            case "Add Engineer":
                newEngineer();
                break;
            case "Add Intern":
                newIntern();
                break;
            case "Exit App":
                exitApp();
                break;
        }

    })
}
function newEngineer (){
    console.log("Add Engineer")
    Inquirer.prompt([
        {
            type:"input",
            message:"Enter Engineer name: ",
            name:"name"
        },
        {
            type:"input",
            message:"Enter Engineer ID: ",
            name:"id"
        },
        {
            type:"input",
            message:"Enter Engineer email: ",
            name:"email"
        },
        {
            type:"input",
            message:"Enter Engineer Github: ",
            name:"github"
        },



    ]).then(userresponse => {
        const teamEngineer = new Engineer(userresponse.name,userresponse.id,userresponse.email,userresponse.github);
        teamHTMLCode += `
        <div class="card" style="width: 18rem;">
        <h5 class="card-title">${teamEngineer.name}</h5>
  <div class="card-body">
    <p class="card-text">Team Engineer</p>
    <p class="card-text">Id:${teamEngineer.id}</p>
    <p class="card-text">Officenumber:${teamEngineer.github}</p>
    <p class="card-text">Email:${teamEngineer.email}</p>
  </div>
</div>
        `
        createTeam()
    })
};

function newIntern (){
    console.log("Add Intern")
    Inquirer.prompt([
        {
            type:"input",
            message:"Enter Intern name: ",
            name:"name"
        },
        {
            type:"input",
            message:"Enter Intern ID: ",
            name:"id"
        },
        {
            type:"input",
            message:"Enter Intern email: ",
            name:"email"
        },
        {
            type:"input",
            message:"Enter Intern School: ",
            name:"school"
        },



    ]).then(userresponse => {
        const teamIntern = new Intern(userresponse.name,userresponse.id,userresponse.email,userresponse.school);
        teamHTMLCode += `
        <div class="card" style="width: 18rem;">
        <h5 class="card-title">${teamIntern.name}</h5>
  <div class="card-body">
    <p class="card-text">Team Intern</p>
    <p class="card-text">Id:${teamIntern.id}</p>
    <p class="card-text">Officenumber:${teamIntern.school}</p>
    <p class="card-text">Email:${teamIntern.email}</p>
  </div>
</div>
        `
        createTeam()
    })
};

function exitApp (){
let HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Employee Roster</title>
  </head>
  <body>
   <header>
    <h1>Hello, world!</h1>
</header>
  ${teamHTMLCode}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

  
  </body>
</html>`

fs.writeFileSync("index.html",HTML,function(err){
    if(err) throw err;
})
};

addManager();