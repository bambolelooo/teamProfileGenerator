const Employee = require("./Employee");
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }
    giveUniqueProperty() {
        return "school";
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role;
    }
    getHTML() {
        return `
        <div class="col">
            <div class="card" style="width: 400px">
                <h3 class="card-header text-center bg-transparent">
                    Intern
                </h3>
    
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Name: ${this.name}</li>
                        <li class="list-group-item">ID: ${this.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                        <li class="list-group-item">School: ${this.school}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }
}
module.exports = Intern;
