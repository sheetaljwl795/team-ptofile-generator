const Manager = require('../lib/manager');

describe('Manager', () => {
    
    describe('Initialization', () => {
        it("should create an Manager", () => {
            const manager = new Manager();
            expect(typeof(manager)).toEqual("object");         
        });
        
        it("should set manager name via constructor", () => {
            const name = "Sheetal";
            const manager = new Manager(name);
            expect(manager.name).toEqual(name);
        });  
        
        it("should set manager id via constructor", () => {
            const id = 2454;
            const manager = new Manager("xyz", id);
            expect(manager.id).toEqual(id);
        }); 
        it("should set manager email via constructor", () => {
            const email = "joesmith@gmail.com";
            const manager = new Manager("xyz", 11, email);
            expect(manager.email).toEqual(email);
        });  
        it("should set manager office number constructor", () => {
            const officeNumber = "123";
            const manager = new Manager("xyz", 11, "email" ,officeNumber);
            expect(manager.officeNumber).toEqual(officeNumber);       
        });
    })
});
