const Intern = require("../lib/Intern");
const intern = new Intern("name", "id", "email", "school");
describe("Intern", () => {
    it("should have github username property", () => {
        expect(intern).toHaveProperty("school", "school");
    });
    it("should have getGithub() method and it should return github username", () => {
        expect(intern.getGithub()).toBeDefined();
        expect(intern.getGithub()).toBe("@github");
    });
    it("should have getRole() method and it should return role (Intern)", () => {
        expect(intern.getRole()).toBeDefined();
        expect(intern.getRole()).toBe("Intern");
    });
});
