const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);  
        this.officeNumber = officeNumber;   
}
displayName() { return this.name };
displayId() { return this.id };
displayEmail() { return this.email };
displayOfficeNumber() { return this.officeNumber };
displayRole() { return "Manager" };
};

module.exports = Manager;