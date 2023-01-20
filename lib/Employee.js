// Employee Constructor
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Return Inputs
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  // Return Employee
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
