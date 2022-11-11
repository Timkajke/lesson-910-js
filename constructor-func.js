function Student(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
}

Student.prototype.showInfo = function() {
    console.log(`Student name: ${this.firstName} ${this.lastName}`);
}
Student.prototype.showAge = function() {
    const deltaTime = Date.now() - Date.parse(this.birthday);
    const studentAge = Math.floor(deltaTime/(365*24*60*60*1000));
    console.log(`${this.firstName} ${this.lastName} is ${studentAge} years old`);
}

const student = new Student();
console.log(student);

const michael = new Student('Michael', 'Schumacher', '06/22/1960');
michael.showInfo();
michael.showAge();

/* const diana = {
    firstName: 'Diana',
    lastName: 'Fention',
    birthday: '08.15.1997',
    showInfo: function() {
        console.log(`Student name: ${this.firstName} ${this.lastName}`);
    },
    showAge: function() {
        const deltaTime = Date.now() - Date.parse(this.birthday);
        const studentAge = Math.floor(deltaTime/(365*24*60*60*1000));
        console.log(`${this.firstName} ${this.lastName} is ${studentAge} years old`);
    }
}

const luis = {
    firstName: 'Luis',
    lastName: 'Suarez',
    birthday: '11.12.1976',
    showInfo: function() {
        console.log(`Student name: ${this.firstName} ${this.lastName}`);
    },
    showAge: function() {
        const deltaTime = Date.now() - Date.parse(this.birthday);
        const studentAge = Math.floor(deltaTime/(365*24*60*60*1000));
        console.log(`${this.firstName} ${this.lastName} is ${studentAge} years old`);
    }
}

console.log(diana);  // object
diana.showInfo();
diana.showAge();
console.log(luis);  */