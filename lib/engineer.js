const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;      
}
displayGitHub() {
    return this.github;
}
displayRole() {
    return "Engineer";
}
}

module.exports = Engineer;