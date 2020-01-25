var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(age, breed) {
        this.age = age;
        this.breed = breed;
    }
    Animal.prototype.makeSound_ = function (sound) {
        console.log(sound);
        console.log(sound);
        console.log(sound);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(age, breed, playsFetch) {
        var _this = _super.call(this, age, breed) || this;
        _this.playsFetch = playsFetch;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        _super.prototype.makeSound_.call(this, "woof woof");
    };
    Dog.prototype.getAgeInHumanYears = function () {
        return this.age * 7;
    };
    return Dog;
}(Animal));
var Spot = new Dog(2, "Labrador", true);
console.log(Spot.age);
console.log(Spot.breed);
console.log(Spot.getAgeInHumanYears());
console.log(Spot.makeSound());
