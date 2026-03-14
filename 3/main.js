
// 1.
let number1 = 15;
let number2 = 15;
if (number1 === number2) {
    alert("Завдання 1: Числа рівні! (" + number1 + " дорівнює " + number2 + ")");
} else {
    alert("Завдання 1: Числа не рівні.");
}

// 2. 
let userNumber = prompt("Завдання 2: Введіть будь-яке число:");
userNumber = Number(userNumber);
if (userNumber % 2 === 0) {
    console.log("Завдання 2: Число " + userNumber + " є ПАРНИМ.");
} else {
    console.log("Завдання 2: Число " + userNumber + " є НЕПАРНИМ.");
}

// 3.
let userAge = prompt("Завдання 3: Скільки вам років?");
userAge = Number(userAge);

if (userAge < 18) {
    alert("Завдання 3: Доступ заборонено! Вам немає 18 років.");
} else {
    alert("Завдання 3: Ласкаво просимо! Вам є 18 років.");
}

// 4.
let priceInput = prompt("Завдання 4: Введіть ціну товару:");
let quantityInput = prompt("Завдання 4: Введіть кількість товару:");
let price = Number(priceInput);
let quantity = Number(quantityInput);
let totalCost = price * quantity;
console.log("--- Завдання 4 ---");
console.log("Ціна за одиницю: " + price);
console.log("Кількість: " + quantity);
console.log("Загальна вартість: " + totalCost);

// 5.
let productPrice = prompt("Завдання 5: Введіть повну вартість товару для розрахунку знижки:");
productPrice = Number(productPrice);
let discountAmount = productPrice * 0.50;
let finalPrice = productPrice - discountAmount;
alert("Завдання 5:\nПочаткова ціна: " + productPrice + "\nЗнижка 50%: -" + discountAmount + "\nЦіна до сплати: " + finalPrice);