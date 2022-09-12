const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;      
}
displayName() { return this.name };
displayId() { return this.id };
displayEmail() { return this.email };
displayGitHub() { return this.github };
displayRole() { return "Engineer"};
};

module.exports = Engineer;