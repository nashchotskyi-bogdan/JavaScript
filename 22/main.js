const output = document.getElementById("output");
function print(text) {
    output.textContent += text + "\n";
}
document.getElementById("task1").addEventListener("click", () => {
    output.textContent = "";
    Promise.resolve(10)
        .then(number => {
            print("Початкове число: " + number);
            return number + 5;
        })
        .then(number => {
            print("Після додавання 5: " + number);
            return number * 2;
        })
        .then(number => {
            print("Після множення на 2: " + number);
            return number - 10;
        })
        .then(result => {
            print("Фінальний результат: " + result);
        })
        .catch(error => {
            print("Помилка: " + error);
        });

});
document.getElementById("task2").addEventListener("click", () => {
    output.textContent = "";
    function toUpperCasePromise(text) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (typeof text === "string") {
                    resolve(text.toUpperCase());
                } else {
                    reject("Потрібно передати рядок");
                }
            }, 2000);
        });
    }
    toUpperCasePromise("Привіт, світ!")
        .then(result => {
            print(result);
        })
        .catch(error => {
            print("Помилка: " + error);
        });

});
document.getElementById("task3").addEventListener("click", () => {
    output.textContent = "";
    function compareNumbers(a, b) {
        return new Promise((resolve, reject) => {
            if (a > b) {
                resolve(a + " більше за " + b);
            }
            else if (b > a) {
                resolve(b + " більше за " + a);
            }
            else {
                reject("Числа рівні");
            }
        });
    }
    compareNumbers(8, 15)
        .then(result => {
            print(result);
        })
        .catch(error => {
            print(error);
        });
});