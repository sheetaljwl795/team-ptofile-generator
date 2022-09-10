class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;   
    }
    displayName() {
        return this.name;
    }
    displayId() {
        return this.id;
    }
    displayEmail() {
        return this.email;
    }
    displayRole() {
        return "Employee";
    }
}

module.exports = Employee;