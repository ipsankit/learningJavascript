class Car {
    constructor (brand, model) {
        this.brand = brand;
        this.model = model;
    }

    displayInfo() {
        console.log("Brand:",this.brand);
        console.log("Model:",this.model );
    }
}
const car1 = new Car ("Toyota","Corolla");
const car2 = new Car ("Honda","Civic");

car1.displayInfo();
car2.displayInfo();