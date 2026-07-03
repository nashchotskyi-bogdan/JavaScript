// 1. 
const tree = document.querySelector("#tree");
const firstLevelItems = tree.children;
console.log("Перший рівень вкладення:", firstLevelItems.length);
const secondLevelItems = tree.querySelectorAll("ul ul li");
console.log("Другий рівень вкладення:", secondLevelItems.length);
// 2.
const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];
const tableBody = document.getElementById("tableBody");
booksArray.forEach(book => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.year}</td>
        <td>${book.rating}</td>
    `;
    tableBody.appendChild(row);
});
// 3.
const elementsArray1 = [
    { tag: 'p', text: 'Елемент 1' },
    { tag: 'div', text: 'Елемент 2' },
    { tag: 'span', text: 'Елемент 3' }
];
const container = document.getElementById("container");
function createElement(obj) {
    const el = document.createElement(obj.tag);
    el.textContent = obj.text;
    return el;
}
elementsArray1.forEach(item => {
    const element = createElement(item);
    container.appendChild(element);
});
// 4.
const elementsArray2 = [
    { text: 'Елемент 1', usePrepend: true },
    { text: 'Елемент 2', usePrepend: false },
    { text: 'Елемент 3', usePrepend: true }
];
const boxContainer = document.getElementById("boxContainer");
elementsArray2.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item.text;
    if (item.usePrepend) {
        boxContainer.prepend(p);
    } else {
        boxContainer.append(p);
    }
});