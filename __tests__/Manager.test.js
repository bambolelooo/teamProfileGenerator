const Manager = require("../lib/Manager");
const manager = new Manager("name", "id", "email", "123");
describe("Manager", () => {
    it("should have officeNumber property", () => {
        expect(manager).toHaveProperty("officeNumber", "123");
    });
    it("should have getOfficeNumber() method and it should return github username", () => {
        expect(manager.getOfficeNumber()).toBeDefined();
        expect(manager.getOfficeNumber()).toBe("123");
    });
    it("should have getRole() method and it should return role (Manager)", () => {
        expect(manager.getRole()).toBeDefined();
        expect(manager.getRole()).toBe("Manager");
    });
});
