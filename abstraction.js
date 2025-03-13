class Car {
    constructor(brand) {
      this.brand = brand;
    }

    start(){
        this.#fuelInjection();
    }
    #fuelInjection() {  // Private method
      console.log("Injecting fuel...");
    }
  }

  const car1 = new Car("Tesla");
  car1.start(); 
  // Injecting fuel...
  // Tesla is starting...
  car1.#fuelInjection(); 
  //❌ ERROR (Private method)
  
