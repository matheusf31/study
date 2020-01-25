class Animal {
  age: number;
  breed: string;

  constructor(age: number, breed: string) {
    this.age = age;
    this.breed = breed;
  }

  makeSound_(sound: string): void {
    console.log(sound);
    console.log(sound);
    console.log(sound);
  }
}

class Dog extends Animal {
  playsFetch: boolean;

  constructor(age: number, breed: string, playsFetch: boolean) {
    super(age, breed);
    this.playsFetch = playsFetch;
  }

  makeSound(): void {
    super.makeSound_("woof woof");
  }

  getAgeInHumanYears(): number {
    return this.age * 7;
  }
}

let Spot = new Dog(2, "Labrador", true);

console.log(Spot.age);
console.log(Spot.breed);
console.log(Spot.getAgeInHumanYears());
console.log(Spot.makeSound());
