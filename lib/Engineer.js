// Import Employee
const Employee = require("./Employee");

// Engineer constructor extended from Employee
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // Return Input
  getGithub() {
    return this.github;
  }

  // Overridden to return Engineer
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
