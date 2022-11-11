class Animal {
    constructor(name) {
        this.name = name;
    }

    showInfo() {
        console.log(`Animal name is ${this.name}`);
    }
}

class Cat extends Animal {
    constructor(name, age, height) {
        super(name);
        this.age = age;
        this.height = height;
    }

    showInfo() { // переопределение метода родительского класса
        super.showInfo(); // расширяет метод родителя
        console.log(`Cat's age is ${this.age}`);
        console.log(`Cat's height is ${this.height}`);
    }
}

class Kitty extends Cat {

}

const barsik = new Cat('Barsik', 2, 222);
barsik.showInfo();
console.log('--------------------------------------');
const littleKitty = new Kitty('Lily', 5, 33);
littleKitty.showInfo();