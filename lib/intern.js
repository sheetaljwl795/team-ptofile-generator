const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);  
        this.school = school;   
}
displayName() { return this.name };
displayId() { return this.id };
displayEmail() { return this.email };
displaySchool() { return this.school };
displayRole() { return "Intern" };
};

module.exports = Intern;