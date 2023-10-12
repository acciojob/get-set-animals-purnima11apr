//complete this code

class Animal {
    constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

class Dog extends Animal {
    constructor() {
        super("Dog");
    }

    bark() {
        this.makeSound();
    }
}

class Cat extends Animal {
    constructor() {
        super("Cat");
    }

    purr() {
        this.makeSound();
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
