const Employee = require("../lib/Employee");
const employee = new Employee("name", "id", "email");
describe("Employee properties", () => {
    it("should have a name", () => {
        expect(employee).toHaveProperty("name", "name");
    });
    it("should have an id", () => {
        expect(employee).toHaveProperty("id", "id");
    });
    it("should have an email", () => {
        expect(employee).toHaveProperty("email", "email");
    });
});
describe("Employee methods", () => {
    it("should have a getName method that returns name", () => {
        expect(employee.getName()).toBe(employee.name);
        expect(employee.getName()).toBe("name");
    });
    it("should have a getId method that returns id", () => {
        expect(employee.getId()).toBe(employee.id);
        expect(employee.getId()).toBe("id");
    });
    it("should have a getEmail method that returns id", () => {
        expect(employee.getEmail()).toBe(employee.email);
        expect(employee.getEmail()).toBe("email");
    });
    it("should have a getRole method that returns role", () => {
        expect(employee.getRole()).toBe(employee.role);
        expect(employee.getRole()).toBe("Employee");
    });
});
