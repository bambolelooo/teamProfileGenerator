const Intern = require("../lib/Intern");
const intern = new Intern("name", "id", "email", "school");
describe("Intern", () => {
    it("should have school name property", () => {
        expect(intern).toHaveProperty("school", "school");
    });
    it("should have getSchool() method and it should return school username", () => {
        expect(intern.getSchool()).toBeDefined();
        expect(intern.getSchool()).toBe("school");
    });
    it("should have getRole() method and it should return role (Intern)", () => {
        expect(intern.getRole()).toBeDefined();
        expect(intern.getRole()).toBe("Intern");
    });
});
