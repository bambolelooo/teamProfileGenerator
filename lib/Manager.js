const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    giveUniqueProperty() {
        return "office number";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this.role;
    }
    getHTML() {
        return `
        <div class="col">
            <div class="card" style="width: 400px">
                <h3 class="card-header text-center bg-transparent">
                    Manager
                </h3>
    
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Name: ${this.name}</li>
                        <li class="list-group-item">ID: ${this.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                        <li class="list-group-item">Office number: ${this.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div class="col">
        `;
    }
}
module.exports = Manager;
