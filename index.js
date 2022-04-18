const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const fs = require("fs")
const Inquirer = require("inquirer");
let teamHTMLCodeManager = "";
let teamHTMLCodeEngineer = "";
let teamHTMLCodeIntern = "";

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
        teamHTMLCodeManager += `
        <div class="card" style="width: 18rem;">
        <h2 class="card-title">${teamManager.name}</h2>
  <div class="card-body">
    <p class="card-text"><h5>Team Manager</h5></p>
    <p class="card-text">Id: ${teamManager.id}</p>
    <p class="card-text">Officenumber: ${teamManager.officenumber}</p>
    <p class="card-text"><a href="mailto:${teamManager.email}">Email Here</a></p>
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
        teamHTMLCodeEngineer += `
        <div class="col-4">
        <div class="card" style="width: 25rem;">
        <h2 class="card-title">${teamEngineer.name}</h2>
  <div class="card-body">
    <p class="card-text"><h5>Team Engineer</h5></p>
    <p class="card-text">Id: ${teamEngineer.id}</p>
    <p class="card-text"><a href="https://github.com/${teamEngineer.github}">GitHub</a></p>
    <p class="card-text"><a href="mailto:${teamEngineer.email}">Email Here</a></p>
  </div>
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
        teamHTMLCodeIntern += `
        <div class="col-4">
        <div class="card" style="width: 25rem;">
        <h2 class="card-title">${teamIntern.name}</h2>
  <div class="card-body">
    <p class="card-text"><h5>Team Intern</h5></p>
    <p class="card-text">Id: ${teamIntern.id}</p>
    <p class="card-text">School: ${teamIntern.school}</p>
    <p class="card-text"><a href="mailto: ${teamIntern.email}">Email Here</a></p>
  </div>
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
    <link rel="stylesheet" href="./CSS/style.css">

    <title>Employee Roster</title>
  </head>
  <body>
   <header>
    <h1>Employee List</h1>
</header>
    ${teamHTMLCodeManager}
    <br>
    <div class="container">
  <div class="row">
  ${teamHTMLCodeEngineer}
  </div></div>
<br>
  <div class="container">
  <div class="row">
  ${teamHTMLCodeIntern}
  </div></div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

  
  </body>
</html>`

fs.writeFileSync("index.html",HTML,function(err){
    if(err) throw err;
})
};

addManager();