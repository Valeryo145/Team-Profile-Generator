const Employee = require("../lib/Employee");

describe("Employee", () => {
    
  describe("getName", () => {
    it("will show employee name", () => {
        const testEmployee = new Employee("Michael Jordan", "MJ23@email.com", "023");
        const name = "Michael Jordan";
        const result = testEmployee.getName();
        expect(result).toEqual(name);
    });
  });

  describe("getId", () => {
    it("will show employee name ID", () => {
        const testEmployee = new Employee("Michael Jordan", "MJ23@email.com", "023");
        const id = "023";
        const result = testEmployee.getId();
        expect(result).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("will show employee name email", () => {
      const testEmployee = new Employee("Michael Jordan", "MJ23@email.com", "023");
        const email = "MJ23@email.com";
        const result = testEmployee.getEmail();
        expect(result).toEqual(email);
    });
  });

  describe("getRole", () => {
    it("will show employees role", () => {
      const testEmployee = new Employee("Michael Jordan", "MJ23@email.com", "023");
        const role = "Employee";
        const result = testEmployee.getRole();
        expect(result).toEqual(role);
    });
  });
});