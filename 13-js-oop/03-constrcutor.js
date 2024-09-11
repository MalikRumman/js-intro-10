/*
PROTOTYPE
Create a constructor called Car
and define 4 fields/instance variables/states as below

year
make
model
price

Create and add 2 prototype function the Car prototype
drive -> {year make model} drives.
stop  -> {year make model} stops.

1. Log each car object to the console
2. Execute drive and stop functions for each car
3. Get each cars price information in the format -> {year make model} is ${price}.
Example: 2023 Tesla X is $80000.
*/

function Car(year, make, model, price) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.price = price;
  }
  
  Car.prototype.drive = function() {
    console.log(`${this.year} ${this.make} ${this.model} drives!`)
  }; 
  
  Car.prototype.stop = function() {
    console.log(`${this.year} ${this.make} ${this.model} stops!`)
  };

  Car.prototype.getPriceInfo = function() {
    console.log(`${this.year} ${this.make} ${this.model} is $${this.price}.`);
};

const car1 = new Car(2023, 'Tesla', 'X', 80000);
const car2 = new Car(2022, 'BMW', 'X7', 60000);
const car3 = new Car(2020, 'Tesla', 'Y', 27000);

const cars = [ car1, car2, car3 ];

for(let i = 0; i < Car.length; i++) {
   ages.push;
}

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);            
    cars[i].drive();                 
    cars[i].stop();                  
    cars[i].getPriceInfo();          
}






