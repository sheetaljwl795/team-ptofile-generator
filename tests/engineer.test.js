const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    
    describe('Initialization', () => {
        it("should create an Engineer", () => {
            const engineer = new Engineer();
            expect(typeof(engineer)).toEqual("object");         
        });
        
        it("should set engineer name via constructor", () => {
            const name = "joe smith";
            const engineer = new Engineer(name);
            expect(engineer.name).toEqual(name);
        });  
        
        it("should set engineer id via constructor", () => {
            const id = 2454;
            const engineer = new Engineer("xyz", id);
            expect(engineer.id).toEqual(id);
        }); 
        it("should set engineer email via constructor", () => {
            const email = "joesmith@gmail.com";
            const engineer = new Engineer("xyz", 11, email);
            expect(engineer.email).toEqual(email);
        });  
        it("should set engineer github constructor", () => {
            const github = "https://github.com/joesmith";
            const engineer = new Engineer("xyz", 11, "email", github);
            expect(engineer.github).toEqual(github);       
        });
    })
});
