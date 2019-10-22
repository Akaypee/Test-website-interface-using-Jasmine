var Candy = function(name, initialQuantity) {
    this.name = name;
    this.initialQuantity = initialQuantity;
    this.total = this.initialQuantity;
};

Candy.prototype.increaseTotal = function(num) {
    this.total = this.total + num;
};

Candy.prototype.decreaseTotal = function(num) {
    this.total = this.total - num;
};

Candy.prototype.addCandy = function(numToAdd) {
    this.increaseTotal(numToAdd);
};

Candy.prototype.removeCandy = function(numToRemove) {
    this.decreaseTotal(numToRemove);
};
