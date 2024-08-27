const car = {
    make: 'Tesla',
    model: 'Y',
    year: 2024,
    color: 'White',
    price: 49900.00,
    drive:function() {
        console.log(`${this.year} ${this.make} ${this.model} drives well!`);
    },
    getprice: function() {
        return this.price;
    },
    getDiscountedPrice: function() {
        return this.price * .9;

    }
};

''
car.drive(); // '2024 Tesla Y drives well!
console.log(car.getprice()); // 49900, 4990     44910

console.log(car.getDiscountedPrice()); // 44910





