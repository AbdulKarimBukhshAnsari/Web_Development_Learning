// Parent Class
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log(`${this.brand} ${this.model} engine started.`);
    }
    stopEngine() {
        console.log(`${this.brand} ${this.model} engine stopped.`);
    }
}

// Child Class
class Car extends Vehicle {
    constructor(brand, model, fuelType) {
        super(brand, model); // Call the constructor of the parent class
        this.fuelType = fuelType;
    }
    refuel() {
        console.log(`${this.brand} ${this.model} is refueling with ${this.fuelType}.`);
    }
}

// Creating an instance of the Child Class
const myCar = new Car("Toyota", "Corolla", "Petrol");

// Using methods from both Parent and Child Classes
myCar.startEngine();  // Output: Toyota Corolla engine started.
myCar.refuel();       // Output: Toyota Corolla is refueling with Petrol.
myCar.stopEngine();   // Output: Toyota Corolla engine stopped.
