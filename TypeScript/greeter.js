/**
 * HERANÇA
 */
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
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Object.defineProperty(Dog.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (!nome || nome.length > 20) {
                throw new Error("nome invalid");
            }
            else {
                this._nome = nome;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Dog;
}());
var PetStore = /** @class */ (function () {
    function PetStore() {
        this._dogs = [new Dog(), new Dog()];
        this._dogs[0].nome = "Fido"; // will call 'set'
        this._dogs[1].nome = "Rex";
    }
    PetStore.prototype.printAllDogNames = function () {
        this._dogs.forEach(function (dog) {
            console.log(dog.nome); // will call 'get'
        });
    };
    return PetStore;
}());
var au = new PetStore();
au.printAllDogNames();
