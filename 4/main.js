// 1.
console.log("=== ЗАВДАННЯ 1 ===");

let num1 = prompt("Завдання 1: Введіть перше число:");
let num2 = prompt("Завдання 1: Введіть друге число:");
let num3 = prompt("Завдання 1: Введіть третє число:");
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
let maxNumber;
if (num1 >= num2 && num1 >= num3) {
    maxNumber = num1;
} else if (num2 >= num1 && num2 >= num3) {
    maxNumber = num2;
} else {
    maxNumber = num3;
}

console.log("Введені числа: " + num1 + ", " + num2 + ", " + num3);
console.log("Найбільше число: " + maxNumber);

// 2.
console.log("\n=== ЗАВДАННЯ 2 ===");
let month = prompt("Завдання 2: Введіть номер місяця (1-12):");
month = Number(month);
let season;
if (month >= 3 && month <= 5) {
    season = "Весна";
} else if (month >= 6 && month <= 8) {
    season = "Літо";
} else if (month >= 9 && month <= 11) {
    season = "Осінь";
} else if (month === 12 || month === 1 || month === 2) {
    season = "Зима";
} else {
    season = "Невірний номер місяця!";
}
console.log("Місяць: " + month);
console.log("Сезон: " + season);


// 3. 
console.log("\n=== ЗАВДАННЯ 3 ===");
let number = prompt("Завдання 3: Введіть число:");
number = Number(number);
if (number > 0) {
    console.log("Число " + number + " є ДОДАТНІМ");
} else if (number < 0) {
    console.log("Число " + number + " є ВІД'ЄМНИМ");
} else {
    console.log("Число дорівнює НУЛЮ");
}


// 4.
console.log("\n=== ЗАВДАННЯ 4 ===");
let angle = prompt("Завдання 4: Введіть величину кута в градусах:");
angle = Number(angle);
let angleType = (angle < 90) ? "гострий" : "тупий";
if (angle === 90) {
    angleType = "прямий";
}
console.log("Кут: " + angle + "°");
console.log("Тип кута: " + angleType);


// 5.
console.log("\n=== ЗАВДАННЯ 5 ===");
let grade = prompt("Завдання 5: Введіть оцінку за тест (0-100):");
grade = Number(grade);
let letterGrade;
if (grade >= 90 && grade <= 100) {
    letterGrade = "A";
} else if (grade >= 80 && grade <= 89) {
    letterGrade = "B";
} else if (grade >= 70 && grade <= 79) {
    letterGrade = "C";
} else if (grade >= 60 && grade <= 69) {
    letterGrade = "D";
} else if (grade >= 0 && grade < 60) {
    letterGrade = "F";
} else {
    letterGrade = "Невірна оцінка!";
}
console.log("Оцінка до інкремента: " + grade);
console.log("Літерна оцінка: " + letterGrade);
let gradeBefore = grade;
console.log("Оцінка після інкремента: " + grade);
let status = (grade >= 60) ? "ЗАРАХОВАНИЙ" : "НЕ ЗАРАХОВАНИЙ";
console.log("Статус студента: " + status);
console.log("Прохідний бал: 60");