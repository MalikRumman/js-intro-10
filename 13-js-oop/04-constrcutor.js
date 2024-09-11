// Prototype
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.sell = function (quantity) {
    if(quantity > this.quantity) throw new Error('Stock is not available!');
    this.quantity -= quantity;
}


const phone = new Product('iPhone 16', 1000, 20);

console.log(phone);

phone.sell(25);

console.log(phone);

















