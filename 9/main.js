// 1
console.log("Class_person");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 2
    sayHello() {
        console.log(`Привіт! Мене звати ${this.name}.`);
    }
}
const person = new Person("John", 30);
console.log("Ім'я:", person.name);
console.log("Вік:", person.age);
person.sayHello();
// 3.
console.log("Class_student");
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    study() {
        console.log(`${this.name} навчається.`);
    }
}
const student = new Student("Alice", 20, "ST12345");
console.log("Ім'я:", student.name);
console.log("Вік:", student.age);
console.log("Student ID:", student.studentId);
student.sayHello();
student.study();