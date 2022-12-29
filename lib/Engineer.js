const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }
    giveUniqueProperty() {
        return "github";
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }
    getHTML() {
        return `
        <div class="col">
            <div class="card" style="width: 400px">
                <h3 class="card-header text-center bg-transparent">
                    Engineer
                </h3>
    
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Name: ${this.name}</li>
                        <li class="list-group-item">ID: ${this.id}</li>
                        <li class="list-group-item">Email: ${this.email}</li>
                        <li class="list-group-item">GitHub: ${this.github}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }
}

module.exports = Engineer;
