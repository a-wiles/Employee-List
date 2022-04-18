const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email) // Super is the way to call parent class constructor
        this.school = school

    }
    getRole(){
        return "Intern"
    }
    getSchool(){
        return this.school
    }
}

module.exports = Intern;