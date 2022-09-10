const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);  
        this.school = school;   
}
displaySchool() {
    return this.school;
}
displayRole() {
    return "Intern";
}
}

module.exports = Intern;