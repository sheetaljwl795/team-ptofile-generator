const Intern = require('../lib/intern');

describe('Intern', () => {
    
    describe('Initialization', () => {
        it("should create an Intern", () => {
            const intern = new Intern();
            expect(typeof(intern)).toEqual("object");         
        });
        
        it("should set Intern name via constructor", () => {
            const name = "joe smith";
            const intern= new Intern(name);
            expect(intern.name).toEqual(name);
        });  
        
        it("should set Intern id via constructor", () => {
            const id = 2454;
            const intern = new Intern("xyz", id);
            expect(intern.id).toEqual(id);
        }); 
        it("should set Intern email via constructor", () => {
            const email = "joesmith@gmail.com";
            const intern= new Intern("xyz", 11, email);
            expect(intern.email).toEqual(email);
        });  
        it("should set Intern github constructor", () => {
            const school = "UW";
            const intern= new Intern("xyz", 11, "email", school);
            expect(intern.school).toEqual(school);       
        });
    })
});