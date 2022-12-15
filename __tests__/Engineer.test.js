const Engineer = require("../lib/Engineer");
const engineer = new Engineer("name", "id", "email", "@github");
describe("Engineer properties and methods", () => {
    it("should have github username", () => {
        expect(engineer).toHaveProperty("github", "@github");
    });
    it("should have getGithub() method and it should return github username", () => {
        expect(engineer.getGithub()).toBeDefined();
        expect(engineer.getGithub()).toBe("@github");
    });
    it("should have getRole() method and it should return role (Engineer)", () => {
        expect(engineer.getRole()).toBeDefined();
        expect(engineer.getRole()).toBe("Engineer");
    });
});
