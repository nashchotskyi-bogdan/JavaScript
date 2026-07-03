// 1.
const hoverBox = document.getElementById("hoverBox");
hoverBox.onmouseover = () => {
    hoverBox.style.background = "orange";
};
hoverBox.onmouseout = () => {
    hoverBox.style.background = "lightgray";
};
//2.
const textBlock = document.getElementById("textBlock");
const menu = document.getElementById("contextMenu");
textBlock.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    menu.style.top = e.pageY + "px";
    menu.style.left = e.pageX + "px";
    menu.classList.remove("hidden");
});
document.addEventListener("click", () => {
    menu.classList.add("hidden");
});
menu.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    if (action === "center") textBlock.style.textAlign = "center";
    if (action === "right") textBlock.style.textAlign = "right";
    if (action === "left") textBlock.style.textAlign = "left";
    if (action === "hide") textBlock.style.display = "none";
    menu.classList.add("hidden");
});
// 3.
const img = document.getElementById("image");
img.onmouseover = () => {
    img.style.transform = "scale(1.2)";
};
img.onmouseout = () => {
    img.style.transform = "scale(1)";
};
// 4.
const player = document.getElementById("player");
let x = 140;
let y = 90;
let keys = {};
document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);
setInterval(() => {
    if (keys["ArrowLeft"]) x -= 5;
    if (keys["ArrowRight"]) x += 5;
    if (keys["ArrowUp"]) y -= 5;
    if (keys["ArrowDown"]) y += 5;
    player.style.left = x + "px";
    player.style.top = y + "px";
}, 20);
// 5.
const menuEl = document.getElementById("menu");
let menuOpen = false;
let index = 0;
document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "m") {
        menuEl.classList.remove("hidden");
        menuOpen = true;
    }
    if (e.key.toLowerCase() === "c") {
        menuEl.classList.add("hidden");
        menuOpen = false;
    }
    if (!menuOpen) return;
    const items = menuEl.querySelectorAll("li");
    if (e.key === "ArrowDown") {
        index = (index + 1) % items.length;
    }
    if (e.key === "ArrowUp") {
        index = (index - 1 + items.length) % items.length;
    }
    items.forEach(i => i.classList.remove("active"));
    items[index].classList.add("active");
});
// 6.
const box = document.getElementById("box");
const dragArea = document.getElementById("dragArea");
let isDragging = false;
box.addEventListener("mousedown", () => {
    isDragging = true;
});
document.addEventListener("mouseup", () => {
    isDragging = false;
});
document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const rect = dragArea.getBoundingClientRect();
    let x = e.clientX - rect.left - 25;
    let y = e.clientY - rect.top - 25;
    box.style.left = x + "px";
    box.style.top = y + "px";
});