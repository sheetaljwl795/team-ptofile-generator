const Employee = require("./employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");


const createHTML = data => {

    const createManager = manager => {
        return `
    <div id="manager" class="card" style="width:20rem; display:inline-flex; margin-left:25px;justify-content:center;background-color:antiquewhite">
        <div class="card-body">
          <h3 class="card-title" style="background-color: blue; color: white; padding: 5px;"><span>${manager.displayName()}</span></h3>
          <h5 class="card-subtitle mb-2 text-muted">Role: <span>${manager.displayRole()}</span></h5>
          <p class="card-text">Employee ID: <span>${manager.displayID()}</span></p>
          <p>Email: <a href="mailto:info@example.com" target="_blank" class="card-link">${manager.displayEmail()}</a> </p>
          <p class="card-text">Office Number: <span>${manager.displayOfficeNumber()}</span></p>
        </div>
    </div>
            `;
    };

    const createEngineer = engineer => {
        return `
    <div id="engineer" class="card" style="width:20rem; display:inline-flex; margin-left:25px;justify-content:center;background-color:antiquewhite">
        <div class="card-body">
          <h3 class="card-title" style="background-color: blue; color: white; padding: 5px;"><span>${engineer.displayName()}</span></h3>
          <h5 class="card-subtitle mb-2 text-muted">Role: <span>${engineer.displayRole()}</span></h5>
          <p class="card-text">Employee ID: <span>${engineer.displayID()}</span></p>
          <p>Email: <a href="mailto:info@example.com" target="_blank" class="card-link">${engineer.displayEmail()}</a> </p>
          <p>GitHub: <a href="https://github.com/sheetaljwl795" target="_blank" class="card-link">${engineer.displayGitHub()}</a></p>
        </div>
    </div>
            `;
    };

    const createIntern = intern => {
        return `
    <div id="intern" class="card" style="width:20rem; display:inline-flex; margin-left:25px;justify-content:center;background-color:antiquewhite">
        <div class="card-body">
          <h3 class="card-title" style="background-color: blue; color: white; padding: 5px;"><span>${intern.displayName()}</span></h3>
          <h5 class="card-subtitle mb-2 text-muted">Role: <span>${intern.displayRole()}</span></h5>
          <p class="card-text">Employee ID: <span>${intern.displayID()}</span></p>
          <p>Email: <a href="mailto:info@example.com" target="_blank" class="card-link">${intern.displayEmail()}</a> </p>
          <p class="card-text">School: <span>${intern.displaySchool()}</span></p>
        </div>
    </div>
            `;
    };

    const renderHTML = [];

    renderHTML.push(members
        .filter(employee => employee.displayRole() === 'Manager')
        .map(manager => createManager(manager))
        );
    renderHTML.push(members
        .filter(employee => employee.displayRole() === 'Engineer')
        .map(engineer => createEngineer(engineer))
        );
    renderHTML.push(members
        .filter(employee => employee.displayRole() === 'Intern')
        .map(intern => createIntern(intern))
        );

module.exports = createHTML ;

}