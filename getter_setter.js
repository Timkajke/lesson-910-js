class Person {
    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
        this._gender = null; // (условно) приватное поле через _gender
    }

    get gender() {
        return this._gender;
    }
    set gender(value) {
        if (value === 'male' || value === 'female') {
            this._gender = value;
        }
        else {
            console.log('Try again!');
        }
    }
    getFullName () {
        return `${this.firstName} ${this.secondName}`;
    }
}

const kirusha = new Person('Kirill', 'Anisimov');
kirusha.gender = 'sdaa'; // нужно обращаться только к сеттеру, геттеру.
kirusha.gender = 'male'; // к приватному полю не получится обратиться (null)
console.log(kirusha._gender);
console.log(kirusha.getFullName());