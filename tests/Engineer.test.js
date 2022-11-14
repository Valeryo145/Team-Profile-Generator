const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

  describe("getGithub", () => {
    it("get Github username of the Engineer", () => {
        const testEngineer = new Engineer("Shaquille O'neal", "SO34@email.com", "034", "SO-34");
        const github = "SO-34";
        const result = testEngineer.getGithub();
        expect(result).toEqual(github);
    });
  });

  describe("getRole", () => {
    it("will return employee role of Engineer", () => {
        const testEngineer = new Engineer("Shaquille O'neal", "SO34@email.com", "034", "SO-34");
        const role = "Engineer";
        const result = testEngineer.getRole();
        expect(result).toEqual(role);
    });
  });
});