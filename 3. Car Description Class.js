//3.Car Description Class
//Create a class called Car with three properties: company, model, and year. The class should have a method called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an instance of the Car class and call the getDescription method.


class Car {
        constructor(brand , model , year){
            this.brand = brand ;
            this.model = model ;
            this.year = year ;
        }
        getDescription(){
            return  `This is a : ${this.year} ${this.brand} ${this.model}`;
        }
}

// Instantiate an instance of the Car class
const myCar  = new Car("Skoda", "Rapid", 2022);
const myCar2 = new Car("Audi", "TT", 2019);
const myCar3 = new Car("Ferrari", "899 GTO", 2020);

// Call the getDescription method
console.log(myCar.getDescription());
console.log(myCar2.getDescription());
console.log(myCar3.getDescription());