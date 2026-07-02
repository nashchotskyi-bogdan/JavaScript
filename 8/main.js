// 1.
console.log("let/const");
for (let i = 0; i < 5; i++) {
    console.log(i);
}
const message = 'test';
function example() {
    if (true) {
        const message = 'Hello, world!';
        console.log("Inside if:", message);
    }
    console.log("Outside if:", message);
}
example();
// 2.
console.log("for...in object");
const person = {
    name: 'Bohdan',
    age: 18,
    occupation: 'Developer'
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// 3.
console.log("for...of+for...in");
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];
for (let student of students) {
    console.log("Student:");
    for (let key in student) {
        console.log(`  ${key}: ${student[key]}`);
    }
}