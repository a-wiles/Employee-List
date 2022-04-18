const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email) // Super is the way to call parent class constructor
        this.github = github

    }
    getRole(){
        return "Engineer"
    }
    getGithub(){
        return this.github
    }
}

module.exports = Engineer;