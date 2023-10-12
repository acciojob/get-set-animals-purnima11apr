//complete this code
class Animal {

	 constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound(sound) {
       console.log(`The ${species} makes a sound`);
    }
}

class Dog extends Animal {

	constructor() {
        super("Dog");
    }

    bark() {
        this.makeSound("woof");
    }
}

class Cat extends Animal {

	 constructor() {
        super("Cat");
    }

    purr() {
        this.makeSound("purr");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
