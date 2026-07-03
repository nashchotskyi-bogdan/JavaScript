let textStr = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!`;
let operation = "5 плюс 7 = 3";
// 1.
const btnUpper = document.getElementById("btnUpper");
const upperResult = document.getElementById("upperResult");
btnUpper.onclick = function () {
    let result = textStr.match(/[A-Z]/g);
    upperResult.textContent = result ? result.join(", ") : "Немає";
};
// 2.
const btnNumbers = document.getElementById("btnNumbers");
const numbersResult = document.getElementById("numbersResult");
btnNumbers.onclick = function () {
    let result = operation.match(/\d+/g);
    numbersResult.textContent = result ? result.join(", ") : "Немає";
};
// 3.
const btnWords = document.getElementById("btnWords");
const wordsResult = document.getElementById("wordsResult");
btnWords.onclick = function () {
    let result = textStr.match(/\b[a-zA-Z]{5}\b/g);
    wordsResult.textContent = result ? result.join(", ") : "Немає";
};