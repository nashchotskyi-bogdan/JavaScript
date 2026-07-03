// 1.
const colorBtn = document.getElementById("colorBtn");
const text = document.getElementById("text");
function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
colorBtn.onclick = function () {
    text.style.color = randomColor();
};
// 2.
const square = document.getElementById("square");
square.style.width = "100px";
square.style.height = "100px";
square.style.backgroundColor = "skyblue";
square.ondblclick = function () {
    square.style.width = square.offsetWidth * 2 + "px";
    square.style.height = square.offsetHeight * 2 + "px";
};
// 3.
const countBtn = document.getElementById("countBtn");
const counter = document.getElementById("counter");
let count = 0;
function increaseCounter() {
    count++;
    counter.textContent = count;
    if (count > 10) {
        countBtn.removeEventListener("click", increaseCounter);
    }
}
countBtn.addEventListener("click", increaseCounter);
// 4.
const container = document.getElementById("container");
for (let i = 1; i <= 10; i++) {
    const div = document.createElement("div");
    div.textContent = "Елемент " + i;
    div.style.width = "100px";
    div.style.padding = "10px";
    div.style.margin = "5px";
    div.style.backgroundColor = "lightgreen";
    div.style.cursor = "pointer";
    div.onclick = function () {
        div.remove();
    };
    container.appendChild(div);
}
// 5.
const blockContainer = document.querySelector(".blockContainer");
blockContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("first")) {
        alert("Натиснули першу кнопку");
    }
    if (event.target.classList.contains("second")) {
        alert("Натиснули другу кнопку");
    }
    if (event.target.classList.contains("third")) {
        alert("Натиснули третю кнопку");
    }
});