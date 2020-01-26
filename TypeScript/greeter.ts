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

class Dog {
  private _nome: string; // beginning underscore is convention

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    if (!nome || nome.length > 20) {
      throw new Error("nome invalid");
    } else {
      this._nome = nome;
    }
  }
}

class PetStore {
  private _dogs: Array<Dog>; // we changed this to private too

  constructor() {
    this._dogs = [new Dog(), new Dog()];
    this._dogs[0].nome = "Fido"; // will call 'set'
    this._dogs[1].nome = "Rex";
  }

  printAllDogNames(): void {
    this._dogs.forEach(dog => {
      console.log(dog.nome); // will call 'get'
    });
  }
}

const au = new PetStore();

au.printAllDogNames();
