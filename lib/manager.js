const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);  
        this.officeNumber = officeNumber;   
}
displayOfficeNumber() {
    return this.officeNumber;
}
displayRole() {
    return "Manager";
}
}

module.exports = Manager;