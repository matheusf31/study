/**
 * HERANÇA
 */
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
// class Animal {
//   age: number;
//   breed: string;
//   constructor(age: number, breed: string) {
//     this.age = age;
//     this.breed = breed;
//   }
//   makeSound_(sound: string): void {
//     console.log(sound);
//     console.log(sound);
//     console.log(sound);
//   }
// }
// class Dog extends Animal {
//   playsFetch: boolean;
//   constructor(age: number, breed: string, playsFetch: boolean) {
//     super(age, breed);
//     this.playsFetch = playsFetch;
//   }
//   makeSound(): void {
//     super.makeSound_("woof woof");
//   }
//   getAgeInHumanYears(): number {
//     return this.age * 7;
//   }
// }
// let Spot = new Dog(2, "Labrador", true);
// console.log(Spot.age);
// console.log(Spot.breed);
// console.log(Spot.getAgeInHumanYears());
// console.log(Spot.makeSound());
/**
 * CONTROLE DE ACESSO
 */
/**
 * Public
 */
// class Dog {
//   public name: string; // leaving out 'public' would work too
//   public age: number;
// }
// class PetStore {
//   dogs: Array<Dog>;
//   constructor() {
//     this.dogs = [new Dog(), new Dog()];
//     this.dogs[0].age = 10;
//     this.dogs[0].name = "rex";
//     this.dogs[1].name = "leopoldo";
//     this.dogs[1].age = 20;
//   }
//   printAllDogNames(): void {
//     this.dogs.forEach(e => {
//       console.log(e.name);
//     });
//   }
//   printAllDogAges(): void {
//     this.dogs.forEach(e => {
//       console.log(e.age);
//     });
//   }
// }
// const au = new PetStore();
// console.log(au);
// au.printAllDogNames();
// au.printAllDogAges();
/**
 * Private
 */
// class Dog {
//   private _name: string;
//   // ou assim:
//   // public _name: string;
//   get qualquerCoisa(): string {
//     return this._name;
//   }
//   set qualquerCoisa(name: string) {
//     if (!name || name.length > 20) {
//       throw new Error("Name invalid");
//     } else {
//       this._name = name;
//     }
//   }
// }
// class PetStore {
//   private _dogs: Array<Dog>; // we changed this to private too
//   constructor() {
//     this._dogs = [new Dog()];
//     this._dogs[0].qualquerCoisa = "Fido"; // will call 'set'
//     // ou com o puclic _name: this.dogs[0]._name
//   }
//   printAllDogNames(): void {
//     this._dogs.forEach(dog => {
//       console.log(dog.qualquerCoisa); // will call 'get'
//       // ou com o puclic _name: dog._name
//     });
//   }
// }
// const au = new PetStore();
// au.printAllDogNames();
/**
 * Protected
 */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.makeSound_ = function (sound) {
        console.log(sound);
        console.log(sound);
        console.log(sound);
    };
    Animal.prototype.hello = function () {
        console.log("hello");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        _super.prototype.makeSound_.call(this, "woof woof"); // acessando métodos com o super
    };
    Dog.prototype.hellow = function () {
        this.hello();
    };
    return Dog;
}(Animal));
var PetStore = /** @class */ (function () {
    function PetStore() {
    }
    PetStore.prototype.makeSomeSounds = function () {
        var dog = new Dog();
        dog.hellow(); // => 'woof woof' 'woof woof' 'woof woof'
    };
    return PetStore;
}());
var cao = new PetStore();
cao.makeSomeSounds();
