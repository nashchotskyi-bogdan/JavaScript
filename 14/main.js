// 1. + 2.
const header = document.createElement("header");
header.style.padding = "50px";
header.style.backgroundColor = "yellow";
header.style.textAlign = "center";
header.style.fontSize = "24px";
document.body.appendChild(header);
// 3.
const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' },
];
menuData.forEach(item => {
    const a = document.createElement("a");
    a.textContent = item.name;
    a.href = item.url;
    // 4. 
    a.setAttribute("target", "_blank");
    a.style.margin = "0 10px";
    a.style.textDecoration = "none";
    a.style.color = "black";
    header.appendChild(a);
});
// 5.
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.gap = "5px";
container.style.marginTop = "20px";
document.body.appendChild(container);
// 6. 
for (let i = 1; i <= 50; i++) {
    const box = document.createElement("div");
    box.classList.add("circle-elemt");
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.borderRadius = "50%";
    // додаткове
    const randomColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    box.style.backgroundColor = randomColor;
    container.appendChild(box);
}