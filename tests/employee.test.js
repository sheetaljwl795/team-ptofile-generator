const { hasUncaughtExceptionCaptureCallback } = require('process');
const Employee = require('../lib/employee');

describe('Employee', () => {
    
    describe('Initialization', () => {
        it("should create an employee", () => {
            const employee = new Employee();
            expect(typeof(employee)).toEqual("object");         
        });
        
        it("should set employee name via constructor", () => {
            const name = "Sheetal";
            const employee = new Employee(name);
            expect(employee.name).toEqual(name);
        });  
        
        it("should set employee id via constructor", () => {
            const id = 2454;
            const employee = new Employee("xyz", id);
            expect(employee.id).toEqual(id);
        }); 
        it("should set employee email via constructor", () => {
            const email = "Sheetal@gmail.com";
            const employee = new Employee("xyz", 11, email);
            expect(employee.email).toEqual(email);
        });         
    })
});

