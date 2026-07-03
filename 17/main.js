// 1.
const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
convertBtn.addEventListener("click", () => {
    const a = parseFloat(amount.value);
    const r = parseFloat(rate.value);
    if (isNaN(a) || isNaN(r)) {
        result.textContent = "Помилка";
        return;
    }
    result.textContent = (a * r).toFixed(2);
});
// 2.
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;
    const delBtn = document.createElement("button");
    delBtn.textContent = "Видалити";
    delBtn.classList.add("deleteBtn");
    delBtn.addEventListener("click", () => {
        li.remove();
    });
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
});