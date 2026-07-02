// 1.
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Помилка: ділення на 0!";
    }
    return a / b;
}
function calculator() {
    const operation = prompt("Завдання 1: Введіть операцію (+, -, /, *):");
    if (operation === null) return;
    const num1 = parseFloat(prompt("Введіть перше число:"));
    const num2 = parseFloat(prompt("Введіть друге число:"));
    if (isNaN(num1) || isNaN(num2)) {
        alert("Будь ласка, введіть коректні числа");
        return;
    }
    let result;
    switch(operation) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            alert("Невідома операція");
            return;
    }
    alert(`Результат: ${num1} ${operation} ${num2} = ${result}`);
    console.log(`1. ${num1} ${operation} ${num2} = ${result}`);
}
calculator();

//2.
function hiUser(user) {
    console.log(`2. Вітаю ${user}`);
}
function welcomeUser(usersArray, callback) {
    for (let i = 0; i < usersArray.length; i++) {
        callback(usersArray[i]);
    }
}
const userName2 = prompt("Завдання 2: Введіть ваше ім'я:");
if (userName2 !== null && userName2.trim() !== "") {
    welcomeUser([userName2.trim()], hiUser);
}

const hiUserArrow = (user) => {
    console.log(`3. Вітаю ${user}`);
};
const welcomeUserArrow = (usersArray, callback) => {
    usersArray.forEach(user => callback(user));
};
const userName3 = prompt("Завдання 3: Введіть ваше ім'я:");
if (userName3 !== null && userName3.trim() !== "") {
    welcomeUserArrow([userName3.trim()], hiUserArrow);
}

function greetUser(name = "Гість") {
    console.log(`Привіт, ${name}!`);
    return `Привіт, ${name}!`;
}
console.log("\n4.");
greetUser(); 
greetUser("Анна");

function processString(str, callback) {
    callback(str);
}
console.log("\n5.");
const myString = "Hello, JavaScript!";
processString(myString, (text) => {
    console.log("Отримано рядок:", text);
});
processString(myString, (text) => {
    console.log("Довжина рядка:", text.length);
});
processString(myString, (text) => {
    console.log("Верхній регістр:", text.toUpperCase());
});

function multiplyValues(a, b, c) {
    return a * b * c;
}
console.log("\n6.");
const result = multiplyValues(2, 3, 4);
console.log(`multiplyValues(2, 3, 4) = ${result}`);
console.log(`multiplyValues(5, 10, 2) = ${multiplyValues(5, 10, 2)}`);
