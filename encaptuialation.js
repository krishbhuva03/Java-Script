class Employee {
    #salary; // Private property (encapsulated)
  
    constructor(name, salary) {
      this.name = name;
      this.#salary = salary;
    }
  
    getSalary() {
      return this.#salary; // Controlled access
    }
  
    setSalary(newSalary) {
      this.#salary = newSalary;
    }
  }
  
  const emp1 = new Employee("Krish", 50000);
  console.log(emp1.#salary); 
 //❌ ERROR (Cannot access private field)
  