// 1.
function checkShapeInteractive() {
    const shapeName = prompt("Завдання 1: Введіть назву фігури (коло, квадрат, трикутник):");
    if (shapeName === null) return;

    switch(shapeName.toLowerCase().trim()) {
        case "коло":
            alert("Коло має 0 сторін");
            break;
        case "квадрат":
            alert("Квадрат має 4 сторони");
            break;
        case "трикутник":
            alert("Трикутник має 3 сторони");
            break;
        default:
            alert(" Це є невідома фігура");
    }
}
checkShapeInteractive();

// 2.
function sumEvenNumbers(start, end) {
    let sum = 0;
    let current = start;
    
    while (current <= end) {
        if (current % 2 === 0) {
            sum += current;
        }
        current++;
    }
    console.log(`Завдання 2: Сума парних чисел від ${start} до ${end} = ${sum}`);
    return sum;
}
sumEvenNumbers(1, 20);

// 3. 
function multiplicationTable(number) {
    console.log(`Завдання 3: Таблиця множення для ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} × ${i} = ${number * i}`);
    }
}
multiplicationTable(6);


// 4. 
function reverseCounter() {
    console.log("Завдання 4: Зворотний лічильник:");
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}
reverseCounter();

// 5. 
function checkEvenOrOddInteractive() {
    const input = prompt("Завдання 5: Введіть число, щоб перевірити, чи воно парне:");
    if (input === null) return;

    const number = Number(input);
    if (isNaN(number)) {
        alert("Будь ласка, введіть коректне число");
        return;
    }

    if (number % 2 === 0) {
        alert(` Число ${number} є парним`);
    } else {
        alert(` Число ${number} є непарним`);
    }
}
checkEvenOrOddInteractive();


// 6.
function findFirstEvenNumber() {
    console.log("Завдання 6: Пошук першого парного числа від 1 до 10:");
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(`Знайдено: ${i}`);
            break;
        }
    }
}
findFirstEvenNumber();


// 7.
function printEvenNumbersOnly() {
    console.log("Завдання 7: Парні числа від 1 до 10:");
    for (let i = 1; i <= 10; i++) {
        if (i % 2 !== 0) continue;
        console.log(i);
    }
}
printEvenNumbersOnly();