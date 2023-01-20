// Import Employee
const Employee = require("./Employee");

// Manager constructor extended from Employee
class Intern extends Employee {
  constructor(name, id, email, school) {
    // super used to call Employee constructor
    super(name, id, email);
    this.school = school;
  }

  // Return Input
  getSchool() {
    return this.school;
  }

  // Overridden to return Intern
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;