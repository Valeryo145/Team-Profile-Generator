const Intern = require("../lib/Intern");

describe("Intern", () => {

  describe("getSchool", () => {
    it("show Intern name of school", () => {
        const testIntern = new Intern("LeBron James", "LBJ@email.com", "006", "University of Denver");
        const school = "University of Denver";
        const result = testIntern.getSchool();
        expect(result).toEqual(school);
    });
  });

  describe("getRole", () => {
    it("show Intern role", () => {
        const testIntern = new Intern("LeBron James", "LBJ@email.com", "006", "LBJ6");
        const role = "Intern";
        const result = testIntern.getRole();
        expect(result).toEqual(role);
    });
  });
});