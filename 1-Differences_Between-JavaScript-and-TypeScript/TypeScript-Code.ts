class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

const person = new Person("Web", "Developer");
console.log(person);