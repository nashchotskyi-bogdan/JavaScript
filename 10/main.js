// гра
const userChoice = prompt("Оберіть: камінь, ножиці або папір");
const choices = ["камінь", "ножиці", "папір"];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];
if (userChoice === null) {
    alert("Гру скасовано.");
} else {
    const user = userChoice.toLowerCase().trim();
    if (!choices.includes(user)) {
        alert("Некоректний вибір!");
    } else {
        let result;
        if (user === computerChoice) {
            result = "Нічия!";
        } else if (
            (user === "камінь" && computerChoice === "ножиці") ||
            (user === "ножиці" && computerChoice === "папір") ||
            (user === "папір" && computerChoice === "камінь")
        ) {
            result = "Ви перемогли!";
        } else {
            result = "Комп'ютер переміг!";
        }
        alert(
            `Ваш вибір: ${user}\n` +
            `Вибір комп'ютера: ${computerChoice}\n\n` +
            `${result}`
        );
    }
}
// math.min + math.max
console.log("Math.min + Math.max");
function getMin(a, b) {
    return Math.min(a, b);
}
function getMax(a, b) {
    return Math.max(a, b);
}
console.log("Менше число:", getMin(15, 8));
console.log("Більше число:", getMax(15, 8));
// math.pow
console.log("Math.pow");
function power(number, exponent) {
    return Math.pow(number, exponent);
}
console.log("2^5 =", power(2, 5));
// math.floor + math.ceil
console.log("Math.floor + Math.ceil");
function roundDown(number) {
    return Math.floor(number);
}
function roundUp(number) {
    return Math.ceil(number);
}
const randomNumber = Math.random() * 10;
console.log("Випадкове число:", randomNumber);
console.log("Math.floor:", roundDown(randomNumber));
console.log("Math.ceil:", roundUp(randomNumber));
// date.getYear
console.log("Date.getYear");
function getBirthYear(age) {
    const currentYear = new Date().getFullYear();
    return currentYear - age;
}
const age = Number(prompt("Введіть ваш вік:"));
if (!isNaN(age)) {
    console.log("Ваш рік народження:", getBirthYear(age));
}
// date.toLocaleString
console.log("Date.toLocaleString");
const currentDate = new Date();
console.log(currentDate.toLocaleString());
// string.split + string.toUpperCase
console.log("String.split + toUpperCase");
const text = "javascript is very interesting";
const words = text.split(" ");
const upperWords = words.map(word => word.toUpperCase());
console.log(upperWords);