const Manager = require("../lib/Manager");

describe("Manager", () => {

  describe("getOffice", () => {
    it("get Manager officeNumber", () => {
        const testManager = new Manager("Valeryo", "757", "Valeryo@email.com", "777");
        const officeNumber = "777";
        const result = testManager.getOfficeNumber();
        
        expect(result).toEqual(officeNumber);
    });
  });

  describe("getRole", () => {
    it("should return role of Manager", () => {
        const testManager = new Manager("Valeryo", "757", "Valeryo@email.com", "Valeryo777");
        const role = "Manager";
        const result = testManager.getRole();
        
        expect(result).toEqual(role);
    });
  });
});