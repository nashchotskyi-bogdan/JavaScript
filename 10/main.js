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