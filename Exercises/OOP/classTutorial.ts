//! Classes & Instances
// Objects -- The things you work within the code. Intances of classes.

// Classes -- 'Blueprints for objects' (theoretical definition). Define how objects look like, which properties and methods they have. Classes make creation of multiple, similar objects much easier

//** public -- This method can be called any where, any time **/
//** private -- This method can only be called by other methods in this class */
//** protected -- This method can be called by other methods in this class, or by other methods in child class */

class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = name;
  }
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Dobri');
accounting.addEmployee('Sedo');
accounting.printEmployeeInfo();
console.log(accounting);
