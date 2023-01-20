// Import Employee
const Employee = require("./Employee");

// Manager constructor extended from Employee
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // super used to call Employee constructor
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // Return Input
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Overridden to return Manager
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;