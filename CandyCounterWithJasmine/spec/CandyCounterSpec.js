describe("CandyCounter", function () {

    describe("When someone removes 20 candies from a bin of 510 skittles candies", function() {
        var skittles;
        beforeEach(function () {
            skittles = new Candy("skittles", 510);
        });

        it(`there should be 490 candies left in the bin.`, function () {
            skittles.removeCandy(20);
            expect(skittles.total).toEqual(490);
        });    
    });

    describe("When an employee adds 600 candies to a bin (of Caramels) that has 4 candies in it ", function() {
        var caramel;
        beforeEach(function () {
            caramel = new Candy("Caramel", 4);
        });

        it(`there should be 604 candies in the bin.`, function () {
            caramel.addCandy(600);
            expect(caramel.total).toEqual(604);
        });    
    });
    
    describe("Removing skittles candies from a given bin containing both skittles and camarels", function() {
        var caramel;
        beforeEach(function () {
            skittlesCandy = new Candy("Caramel", 420);
            caramelCandy = new Candy("Caramel", 80);
        });

        it(`should not change the quantity of camarels in the bin`, function () {
            skittlesCandy.removeCandy(80);
            expect(caramelCandy.total).toEqual(80);
        });    
    });
});